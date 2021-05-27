import refs from './refs'
import changeColor from './changeColor'
let changeColorIntervalId = null
const startButton = () =>{
    changeColorIntervalId = setInterval(changeColor, 1000)
    refs.start.disabled = true
    refs.start.classList.add('disabled')
   }
const stopButton = () => {
   clearInterval(changeColorIntervalId)
   refs.start.disabled = false
   refs.start.classList.remove('disabled')
}
export {startButton, stopButton}