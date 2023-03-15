
import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.getElementById("vimeo-player");
const player = new Player(iframe);
player.on('timeupdate', throttle(onPlay, 1000));
function onPlay({seconds}) {
        localStorage.setItem("videoplayer-current-time", seconds);
};

const startTame = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(startTame || 0);