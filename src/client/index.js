// importing functions
import { submitBtn } from '../client/js/app.js'
import { weatherUpdates, pictureUpdate } from "./js/ui.js"

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitBtn();
})

// importing style sheets
import './styles/styles.scss'

export {
    submitBtn,
    weatherUpdates,
    pictureUpdate
}