// ==UserScript==
// @name        kappa
// @namespace   TwtichEmotes4Facebook
// @include     TwtichEmotes4Facebook
// @version     1
// @grant       none
// ==/UserScript==


var emotes = []; //Todo

function kappafy(){
    var messages = document.getElementsByClassName("null");
    for(var i = 0; i < messages.length; i++){
        if(messages[i].innerHTML.match(/Kappa/g)){
           var modified = messages[i].innerHTML.replace(/Kappa/g, "<img src=\"http://static-cdn.jtvnw.net/jtv_user_pictures                           /chansub-global-emoticon-ddc6e3a8732cb50f-25x28.png\">");
           messages[i].innerHTML = modified;
        }

    }
}

window.setInterval(kappafy, 1000);
