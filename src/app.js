const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', function (req, res) {
    console.log(req.body);
    res.send('success');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});