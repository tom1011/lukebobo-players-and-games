

console.log('client ready')
$(document).ready(onready);

function onready() {
    appendgamebord()
    console.log('jquery ready')
    playersAppend();
    $('#newPlayersButton').on('click',newplayerfunction);
    $('#addGameButton').on('click', addGameButton);
    $('#clearGameHistory').on('click', clearGameData);
}

function addGameButton() {
    let playerValue = $('#playerScore').val();
    let playerName = $('#playerName').val();
    let opponentValue = $('#oppoenetScore').val();
    let opponentName = $('#opponentName').val();
    $.ajax({
        method: 'POST',
        url: '/newgame',
        data: {playervalue: playerValue,
        opponentvalue: opponentValue,
        playername: playerName,
        opponentName: opponentName,
    }
    }).then(appendgamebord())
}

function appendgamebord() {
    $('#gameTable').empty();
    $.ajax({
        method: 'GET',
        url: '/games'
    }).then(function (gamerarray) {
        console.log('in for function')
        console.log(gamerarray);
        for (let i=0; i<gamerarray.length; i++){
            $('#gameTable').append(`
            <tr>
                <td>${gamerarray[i].playername}</td>
                <td>${gamerarray[i].playervalue}</td>
                <td>${gamerarray[i].opponentName}</td>
                <td>${gamerarray[i].opponentvalue}</td>
                <td>${gamerarray[i].winner}</td>
            </tr>
            `)
        }

})}

function newplayerfunction() {
    let newplayer = $('#newPlayersNameInput').val();
    console.log(newplayer);
    $.ajax({
        method: 'POST',
        url: '/newplayers',
        data: {name: newplayer}
    }).then(playersAppend())
}

function playersAppend() {
    $('#unorderedlist').empty();
    $('.playersNameOptions').empty();
    $.ajax({
        method: 'GET',
        url: '/players'
    }).then(function (playerarray) {
        //update player array at top
        for (let i = 0; i < playerarray.length; i++) {
            $('#unorderedlist').append(`
            <li>${playerarray[i].name}</li>
        `)//end update player array.
        //drop down menu
        $('.playersNameOptions').append(`
        <option value = "${playerarray[i].name}">${playerarray[i].name}</option>
        `)
        }// end drop down menu update
    })

}
