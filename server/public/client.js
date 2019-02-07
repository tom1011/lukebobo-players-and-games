

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



function playersAppend() {
    $('#unorderedlist').empty();
    $.ajax({
        method: 'GET',
        url: '/players'
    }).then(function (playerarray) {
        for (let i = 0; i < playerarray.length; i++) {
            $('#unorderedlist').append(`
            <li>${playerarray[i].name}</li>
        `)
        }
    })

}
