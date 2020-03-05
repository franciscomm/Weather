class Weather {
  constructor(city) {
    this.city = city;
    this.apiKey = '8d4fb1e603989d0b3cd4c4ecbd024a60';
    //Implemement later with api that offers states' info
    //this.state = state;
  }

  //Fetch weather from API
  async getWeather() {
    //Response variable
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=imperial`);

    //Response data
    const responseData = await response.json();

    return responseData;
  }

  //Change weather location
  changeLocation(city) {
    this.city = city;
  }
}