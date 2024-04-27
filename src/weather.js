const weather = {
  weatherTypes: ["sunny", "cloudy", "light rain", "stormy"],

  weatherNow: null,

  generateRandomWeather: function () {
    this.weatherNow =
      this.weatherTypes[Math.floor(Math.random() * this.weatherTypes.length)];
  },

  getCurrentWeather: function () {
    return this.weatherNow;
  },

  isStormy: function () {
    return this.weatherNow === "stormy";
  },
};

export default weather;
