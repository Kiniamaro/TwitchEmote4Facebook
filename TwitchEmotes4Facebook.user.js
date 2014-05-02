// ==UserScript==
// @name          TwitchEmote4Facebook
// @description   adds the Twitch emotes to the facebook chat
// @homepage      https://github.com/Kiniamaro/TwitchEmote4Facebook
// @version       0.1.0
// @match         https://www.facebook.com/*
// @grant         none
// ==/UserScript==

function twitchImg(file) {
    return '<img src="https://static-cdn.jtvnw.net/jtv_user_pictures/' + file + '">';
}

var emotes = [
    [/Kappa/g,      twitchImg('chansub-global-emoticon-ddc6e3a8732cb50f-25x28.png')],
    [/TriHard/g,    twitchImg('chansub-global-emoticon-6407e6947eb69e21-24x30.png')],
    [/FrankerZ/g,   twitchImg('chansub-global-emoticon-3b96527b46b1c941-40x30.png')],
    [/Kreygasm/g,   twitchImg('chansub-global-emoticon-3a624954918104fe-19x27.png')],
    [/FailFish/g,   twitchImg('chansub-global-emoticon-c8a77ec0c49976d3-22x30.png')],
    [/BibleThump/g, twitchImg('chansub-global-emoticon-f6c13c7fc0a5c93d-36x30.png')]
];

var observer = new MutationObserver(function (mutations) {
    for (var i = 0; i < mutations.length; mutations++) {
        var msglist = mutations[i].target.getElementsByClassName('null');
        for (var j = 0; j < msglist.length; j++) {
            for (var k = 0; k < emotes.length; k++) {
                if (msglist[j].textContent.match(emotes[k][0])) {
                    msglist[j].innerHTML = msglist[j].innerHTML.replace(emotes[k][0], emotes[k][1]);
                }
            }
        }
    };
});

var readyChecker = setInterval(function () {
    var chatContainer = document.getElementById('ChatTabsPagelet');
    if (chatContainer != null) {
        observer.observe(chatContainer, {childList: true, subtree: true});
        clearInterval(readyChecker);
    }
}, 100);
