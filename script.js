window.onload = function(){
var audio = new Audio();
[].forEach.call(document.querySelectorAll('.play'), function(item) {
        item.addEventListener('click', function() {
        var path = 'http://zf.fm/download/';
        var audioName = item.querySelector('audio').getAttribute('src');
        audio.pause();
        var fullPath = path+audioName;
        audio.src = fullPath;
        audio.play();
        });
    });
}