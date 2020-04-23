// Will play a sound when you receive a twitch chat message under stream manager dashboard. 

var playSound = (function beep() {
    // only for testing pls! Point to your own uplaoded sound file.
    var snd = new Audio("http://soundbible.com/grab.php?id=2154&type=wav");  
    return function() {     
        snd.play(); 
    }
})();

// Will play a sound whenever a new message arrives in the chat window.
$('.chat-list__list-container').addEventListener("DOMNodeInserted", function(ev){
    playSound();
});
