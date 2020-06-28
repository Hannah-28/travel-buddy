// importing functions
import { submitBtn } from '../client/js/app.js'
import { getCoordinates } from './js/requests'
const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    submitBtn();
})


// importing style sheets
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

export {
    submitBtn,
    getCoordinates
}