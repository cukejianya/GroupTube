// var io = require('socket.io')(80);
// var cfg = require('./config.json')

let YouTubePlayer = require('youtube-player');
let io = require('socket.io')(80);

let player = YouTubePlayer('video-player');
player.loadVideoById('M7lc1UVf-VE');
player.playVideo();

io.on('connection' (socket) => {
	socket.on('updateState', (state) => {
		socket.emit('changeState', state)
	})
})
