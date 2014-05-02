// ==UserScript==
// @name          TwitchEmote4Facebook
// @description   adds the Twitch emotes to the facebook chat
// @homepage      https://github.com/Kiniamaro/TwitchEmote4Facebook
// @version       0.1.0
// @match         https://www.facebook.com/*
// @grant         none
// ==/UserScript==

var emotes = [
    {name: 'Kappa', regex: /Kappa/g, image: '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-ddc6e3a8732cb50f-25x28.png">'},
    {name: 'TriHard', regex: /TriHard/g, image: '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-6407e6947eb69e21-24x30.png">'},
    {name: 'FrankerZ', regex: /FrankerZ/g, image: '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-3b96527b46b1c941-40x30.png">'},
    {name: 'Kreygasm', regex: /Kreygasm/g, image: '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-3a624954918104fe-19x27.png">'},
    {name: 'FailFish', regex: /FailFish/g, image: '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-c8a77ec0c49976d3-22x30.png">'},
    {name: 'BibleThump', regex: /BibleThump/g, image: '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/chansub-global-emoticon-f6c13c7fc0a5c93d-36x30.png">'}
];

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

