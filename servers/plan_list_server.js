const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();
app.use(cors());

app.use(express.static(__dirname));


app.get('/recommended', function (req, res) {
    res.sendFile(path.join(__dirname, 'recommended_plan.html'));
});
app.get('/list', function (req, res) {
    res.sendFile(path.join(__dirname, 'plan_list.html'));
});
app.get('/page', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(10001);
