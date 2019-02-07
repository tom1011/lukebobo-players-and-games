let express = require('express');
let app = express();
let PORT = 5000;
let players = require('./modelus/plaers-array');

app.get('/players', function (req,res){
    res.send(players);
})

app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});