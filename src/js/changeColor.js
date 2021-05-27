import refs from './refs'
import colors from '../colors.json'
import randomValue from './randomValue'

export default () => {
    let randomColor = randomValue (0, colors.length -1)
    refs.body.style.backgroundColor = colors[randomColor]
    }