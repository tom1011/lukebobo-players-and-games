

console.log('client ready')
$(document).ready(onready);

function onready() {
    console.log('jquery ready')
    playersAppend();
    $('#newPlayersButton').on('click',newplayerfunction);
}

function newplayerfunction() {
    let newplayer = $('#newPlayersNameInput').val();
    console.log(newplayer);
    $.ajax({
        method: 'POST',
        url: '/newplayers',
        data: {name: newplayer}
    }).then(playersAppend () )
}

function dropDownMenuPlayers(arrayobjects){


    $('.playersNameOptions').append(`<option value = "">David</option>`)
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
