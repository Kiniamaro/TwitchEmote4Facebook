// ==UserScript==
// @name          TwitchEmote4Facebook
// @description   adds the Twitch emotes to the facebook chat
// @homepage      https://github.com/Kiniamaro/TwitchEmote4Facebook
// @version       0.1.0
// @match         https://www.facebook.com/*
// @grant         none
// ==/UserScript==


var emotePage = document.createElement('script');
emotePage.setAttribute('src', 'https://raw.githubusercontent.com/Kiniamaro/Twitc' +
                                 'hEmote4Facebook/EXTERNAL_EMOTES/emotes.js');
document.getElementsByTagName('head')[0].appendChild(emotPage);

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mut) {
        var msglist = mut.target.getElementsByClassName('null');
        for (var i = 0; i < msglist.length; i++) {
            var msg = msglist[i];
            textToEmote(msg);
        }
    });
});

function documentReady() {
    var chatContainer = document.getElementById('ChatTabsPagelet');
    observer.observe(chatContainer, {childList: true, subtree: true});
}

var readyStateChecker = setInterval(function () {
    if (document.readyState === 'complete') {
        documentReady();
        clearInterval(readyStateChecker);
    }
}, 100);

function textToEmote(message) {
    for(var i = 0; i < emotes.length; i ++) {
        if (message.textContent.match(emotes[i].regex)) {
            message.innerHTML = message.innerHTML.replace(emotes[i].regex, emotes[i].image);
        }
    }
}


