const express = require("express");
const data = require("./data.json");
var path = require('path');
const app = express();

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});