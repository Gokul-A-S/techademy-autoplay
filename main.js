'use strict';
var dclhandler = false;
if (document.readyState !== 'loading') {
    start();
} else {
    dclhandler = true;
    document.addEventListener('DOMContentLoaded', start);
}
function start() {
    if (dclhandler) { document.removeEventListener('DOMContentLoaded', start); }

    setTimeout(() => {
        // let video = document.elementFromPoint(900, 400)
        let video = document.getElementsByTagName('video')[0];
        // console.log(video[0]);
        video.play();
        video.currentTime = 10000;

    }, 3000);

    window.setTimeout(function () {
        location.reload();
    }, 30000);


}