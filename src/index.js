import './css/style.css'
import refs from './js/refs'
import {startButton, stopButton} from './js/actionButtons'


refs.start.addEventListener('click', startButton)
refs.stop.addEventListener('click', stopButton)