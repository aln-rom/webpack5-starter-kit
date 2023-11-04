import generateJoke from "./generateJoke";
import './styles/main.scss'
import laughing from './assets/emoji.svg'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughing


console.log(generateJoke())
