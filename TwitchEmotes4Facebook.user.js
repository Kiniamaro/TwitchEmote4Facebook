// ==UserScript==
// @name         TwitchEmote4Facebook
// @description  adds the Twitch emotes to the facebook chat
// @homepage     https://github.com/Kiniamaro/TwitchEmote4Facebook
// @version      0.1.0
// @include      https://www.facebook.com/*
// @grant        none
// ==/UserScript==

var emotes = []; // TODO

var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mut) {
        var msglist = mut.target.getElementsByClassName('null');

        for (var i = 0; i < msglist.length; i++) {
            var msg = msglist[i];
            if (msg.textContent.match(/Kappa/)) {
                msg.innerHTML = msg.innerHTML.replace(
                    /Kappa/g,
                    '<img src="http://static-cdn.jtvnw.net/jtv_user_pictures/' +
                        'chansub-global-emoticon-ddc6e3a8732cb50f-25x28.png">');
            }
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
