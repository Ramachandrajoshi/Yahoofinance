const express = require('express');
const app = express();
const { port } = require('./package.json');
app.use(express.static('dist'))
app.listen(port, () => {
    console.log("app started on port: " + port);
});