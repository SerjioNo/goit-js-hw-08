
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const STORAGE_PLAY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem(STORAGE_PLAY, seconds);
}

player.setCurrentTime(localStorage.getItem(STORAGE_PLAY))
.then(onPlay)
.catch(function() {console.log('Ошибка');});


