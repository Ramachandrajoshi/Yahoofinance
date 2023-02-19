const axios = require("axios");

const getTransactions = async (stock = "AAPL", minVolume = 10) => {
    console.log("fetching from api", new Date());
    const resp = await axios.get(`https://query2.finance.yahoo.com/v7/finance/options/${stock}`);
    const option = resp.data.optionChain.result[0];
    if (!option) {
        return {};
    }
    const quote = option.quote;
    const { regularMarketPrice } = quote;
    let calls = option.options[0].calls;
    let puts = option.options[0].puts;
    calls = filteroutLowerVolume(calls, minVolume);
    puts = filteroutLowerVolume(puts, minVolume);
    const pairs = findOptionPairs(calls, puts);
    let gains = calculateGains(pairs, regularMarketPrice);
    gains = sortDescByKey(gains, "totalGain");

    return { quote, pairs: gains, maxGain: gains[0].totalGain, maxLoss: gains[gains.length - 1].totalGain };
};

const calculateGains = (pairs, marcketPrice) => pairs.map(p => {
    const callGain = (p.call.strike - marcketPrice) * p.call.volume;
    const putGain = (marcketPrice - p.put.strike) * p.put.volume;
    const totalGain = putGain < 0 ? (callGain + putGain) : (putGain + callGain);
    return {
        ...p,
        callGain,
        putGain,
        totalGain
    }
});

const findOptionPairs = (calls, puts) => {
    const putsStrikeMap = puts.reduce((pre, cur) => ({ ...pre, [`${cur.strike}_${cur.expiration}`]: cur }), {});
    return calls.map(c => ({ call: c, put: putsStrikeMap[`${c.strike}_${c.expiration}`] })).filter(p => p.put);
}

const sortDescByKey = (dataArray, key) => dataArray.sort((a, b) => (b[key] - a[key]));

const filteroutLowerVolume = (set, minVolume) => set.filter(s => s.volume > minVolume);



module.exports = { getTransactions }