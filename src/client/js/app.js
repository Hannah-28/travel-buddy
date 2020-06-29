// global variables


// getting inputs
function submitBtn() {
    //recieving location data.
    const location = document.getElementById('location').value;
    const travelDate = document.getElementById('tripdate').value;
    const endDate = document.getElementById('end-date').value;
    console.log(endDate);
    //sending location data to requests.js
    Client.getCoordinates(location);
}


//Functions to process data
function tripLength() {

}






export {
    submitBtn
}