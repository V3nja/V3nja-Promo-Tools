function generateComment() {
    var comments = [
        "This song is a vibe! 🔥",
        "I can't stop listening to this! 😍",
        "Definitely on repeat! 🎶",
        "V3nja is next level! 🔥",
        "On my playlist forever! 🙌"
    ];
    var randomComment = comments[Math.floor(Math.random() * comments.length)];
    document.getElementById("commentDisplay").innerText = randomComment;
}

function generateViews() {
    var fakeViews = Math.floor(Math.random() * 1000000) + 1000;
    document.getElementById("viewsDisplay").innerText = fakeViews + " views";
}

function generateCaption() {
    var captions = [
        "The wait is over! 🔥 Listen to my latest track now! 🎶 #V3nja #NewMusic",
        "V3nja’s new track is out now! Don’t miss it! 🔥 #Afrobeat #MusicPromo",
        "Feeling the vibe with my latest release! 🌍 #NewTrack #Promo #V3nja",
        "My new song is here! Go check it out! 🎧🔥 #V3nja #MusicRelease",
        "Just dropped some heat! 💥 Tune in now! 🎶 #NewMusic #V3nja"
    ];
    var randomCaption = captions[Math.floor(Math.random() * captions.length)];
    document.getElementById("captionDisplay").innerText = randomCaption;
}
