let express = require('express');
let app = express();
let PORT = 5000;
let players = require('./modelus/plaers-array');
let bodyParser = require('body-parser');



app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/players', function (req,res){
    res.send(players);
})

app.post('/newplayers', function (req,res) {
    players.push(req.body);
    res.sendStatus(201);
});

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});