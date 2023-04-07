import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
const CURRENT_TIME_KEY = "videoplayer-current-time";
const iframeEl = document.querySelector('#vimeo-player');
 const player = new Player(iframeEl);
//console.log(player);
function onPlay(evt) {
    localStorage.setItem(CURRENT_TIME_KEY, evt.seconds);
}
player.on('timeupdate', throttle(onPlay, 1000));
const itemLocal = localStorage.getItem(CURRENT_TIME_KEY);
player.setCurrentTime(JSON.parse(itemLocal)||0);
/*const options = {
        width: 640,
        loop: true
    };*/


