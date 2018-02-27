"use strict";

console.log("test");

var topArticle = document.getElementById("top-article");

console.log(topArticle);

var article = $("#top-article");

console.log(article);

var allButtons = document.getElementsByTagName("button");
console.log("allButtons by TagName", allButtons);
//rememeber this returns an array
var jbutton = $("button");
console.log("jbutton", jbutton, jbutton.html());



$(".article--main").each((arrayIndex, currentElement) => {
    // console.log("article--main", arrayIndex,$(currentElement).html());
    $(currentElement).html("hello world");
});

//select specific element with attribute in HTML and show text
var umbrellaElement = $("div[umbrella='open']");
console.log("umbrella text: ", umbrellaElement.html());

// Handling events
$("#destroyer").click((evt) => {
    if ($("#destroyer").text() == 'Hide Songs') {
        $(".song-container").hide(1000);
        $("#destroyer").text('Show Songs');
    } else {
        $(".song-container").show("fast");
        $("#destroyer").text('Hide Songs');
    }
});

function functionIWantjQueryToExecute(songList) {
    console.log("who is this", songList);

    if (songList.songs) {
        for (var i = 0; i < songList.songs.length; i++) {
            var currentSong = songList.songs[i];
            $("#list-of-songs").append(`<h1>${currentSong.title}</h1>`);
            $("#list-of-songs").append(`<div>Performed by ${currentSong.artist}</div>`);
            $("#list-of-songs").append(`<div>On the album <strong>${currentSong.album}</strong></div>`);
        }
    }
}

function makeAPICall(url) {
    return $.ajax({
        url: url,
        dataType: "json"
    });
}

makeAPICall('javascripts/songs.json')
    .then((data) => {
            console.log("makeCallResolve", data);
            functionIWantjQueryToExecute(data)
        },
        (reject) => {
            console.log("SOMETHING WENT REALLY WRONG");
        });