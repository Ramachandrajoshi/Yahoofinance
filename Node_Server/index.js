const express = require('express');
const app = express();
const cors = require('cors');
const { getTransactions } = require('./stock-check');
const { useStockCache, setStockCache } = require('./stock-cache-middleware');
const { PORT = 4000 } = process.env;

app.use(cors());

app.get('/:stock', useStockCache, (req, res,) => {
    getTransactions(req.params.stock, req.query.min).then(data => { setStockCache(req.params.stock, data); res.json(data) }).catch(error => console.error(error));
});

app.listen(PORT, () => {
    console.log("app started on port: " + PORT);
});