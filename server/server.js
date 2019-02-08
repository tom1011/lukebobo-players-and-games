let express = require('express');
let app = express();
let PORT = 5000;
let players = require('./modelus/plaers-array');
let bodyParser = require('body-parser');
let games = require('./modelus/games-array')

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/players', function (req,res){
    res.send(players);
})

app.get('/games', function (req,res){
    res.send(games);
})

app.post('/newplayers', function (req,res) {
    players.push(req.body);
    res.sendStatus(201);
});

app.post('/newgame', function (req,res) {
    games.push(req.body);
    console.log(req.body)
    res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});