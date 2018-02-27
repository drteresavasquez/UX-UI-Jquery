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
 console.log(umbrellaElement);
     console.log("umbrella text: ", umbrellaElement.html());

// Handling events
$("#destroyer").click((evt) => {
    if ($("#destroyer").text() == 'Hide Songs') {
       $(".song-container").hide("slow");
       $("#destroyer").text('Show Songs');
    } else {
       $(".song-container").show("fast");
       $("#destroyer").text('Hide Songs');
    }
 });