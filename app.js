//Initialize UI Object
const ui = new UI();

//Initialize Storage Object
const storage = new Storage();

//Get stored location data
const weatherLocation = storage.getLocationData();

//Initialize Weather Object
const weather = new Weather(weatherLocation.city);
//Get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

//Event to change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  //Change Location
  weather.changeLocation(city);

  //Set new location in local storage
  storage.setLocationData(city);

  //Get and display weather with new city
  getWeather();

  //Close modal
  $('#locModal').modal('hide');
});

//Call when DOM loads
function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
      console.log(results);
    })
    .catch(err => console.log(err));
}