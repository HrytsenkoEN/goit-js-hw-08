import Player from '@vimeo/player';


const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);


player.on('timeupdate', handleTimeUpdate);


function handleTimeUpdate(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}


const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}

//-----------------------
// import Player from "@vimeo/player";
// import throttle from "lodash.throttle";
// const iframe = document.getElementById("vimeo-player");
// const player = new Player(iframe);
// player.on('timeupdate', throttle(onPlay, 1000));
// function onPlay(e) {
//     console.log(e.seconds);
//     const time = e.seconds;
//     localStorage.setItem("videoplayer-current-time", time);
// };
// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });
// const currentTame = localStorage.getItem("videoplayer-current-time");
// const startTame = JSON.parse(currentTame);
// console.log(startTame);
// player.setCurrentTime(currentTame || 0);