// ==UserScript==
// @name         TwitchEmote4Facebook
// @description  adds the Twitch emotes to the facebook chat
// @homepage     https://github.com/Kiniamaro/TwitchEmote4Facebook
// @version      0.1.0
// @include      *.facebook.com/*
// @grant        none
// ==/UserScript==

var emotes = []; // Todo

function kappafy() {
    var messages = document.getElementsByClassName("null");
    for (var i = 0; i < messages.length; i++) {
        if (messages[i].innerHTML.match(/Kappa/g)) {
            var modified = messages[i].innerHTML.replace(
                /Kappa/g,
                '<img src="http://static-cdn.jtvnw.net/jtv_user_pictures/' +
                    'chansub-global-emoticon-ddc6e3a8732cb50f-25x28.png">'
            );
            messages[i].innerHTML = modified;
        }
    }
}

window.setInterval(kappafy, 1000);
