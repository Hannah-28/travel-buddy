// global variables

function submitBtn() {
    //recieving location data.
    const location = document.getElementById('location').value;
    const travelDate = document.getElementById('tripdate').value;
    //sending location data to requests.js
    Client.getCoordinates(location);

}
export {
    submitBtn
}