const NodeCache = require("node-cache");

const cache = new NodeCache({ stdTTL: 15 });
const useStockCache = (req, res, next) => {
    const isInTime = isTradingTime();
    try {
        const stock = req.params.stock;
        // dont use cache in trading time. so we get real data which is coming from API
        if (!isInTime && cache.has(stock)) {
            return res.status(200).json(cache.get(stock));
        }
    } catch (e) {
        console.error(e);
    }
    next();
};

const setStockCache = (key, data) => {
    cache.set(key, data);
}
const isTradingTime = () => {
    const now = new Date();
    // Stock market trading is off on  Weekends! (saturday and sunday)
    if (now.getDay() == 6 || now.getDay() == 0) {
        return false;
    }

    // Stock market trading stars from 09:15 AM everyday
    let tradingStartTime = new Date()
    tradingStartTime.setHours(9, 15, 0, 0);

    // Stock market trading ends at 03:30 PM everyday
    let tradingEndTime = new Date()
    tradingEndTime.setHours(15, 30, 0, 0);

    return now.getTime() > tradingStartTime.getTime() && now.getTime() < tradingEndTime.getTime();
}
module.exports = { useStockCache, setStockCache }