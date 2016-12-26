var YouTubePlayer = require('youtube-player');
let socket = io();
var player1;

player1 = YouTubePlayer('player-1', {
    videoId: 'M7lc1UVf-VE'
});

player.on('onStateChange', (state) => {

});

let stateNames = {
  '-1': 'unstarted',
  0: 'ended',
  1: 'playing',
  2: 'paused',
  3: 'buffering',
  5: 'video cued'
};

var socket = io('http://localhost/');
socket.on('connect', () => {
  socket.on('stateChange', (state) => {
    player.emit('stateChange', state)
  })
})
