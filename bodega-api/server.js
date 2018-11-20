var express = require("express");
const redis = require("redis");
const bodyParser = require('body-parser');

var app = express();
var redisClient = redis.createClient(6379,"localhost");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

redisClient.on('error', function(err){
    console.log('Something went wrong ', err)
});

app.post("/api/pedidos", (req, res, next) => {
    redisClient.set('pedido', JSON.stringify(req.body), redis.print);
    res.json(req.body);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});