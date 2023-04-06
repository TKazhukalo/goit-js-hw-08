import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
var throttle = require('lodash.throttle');
 const player = new Player('vimeo-player', {
    id: 236203659,
    width: 640
});
console.log(player);
player.on('timeupdate', function() {
    console.log('played the video!');
    
});

const options = {
        width: 640,
        loop: true
    };


