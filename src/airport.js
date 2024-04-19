const airport = {
  airportCapacity: 10,
  planesAtAirport: [],
  changeCapacity: function (newCapacity) {
    if (typeof newCapacity === "number" && newCapacity >= 0) {
      this.airportCapacity = newCapacity;
    }
  },
  isAirportFull: function () {
    return this.planesAtAirport.length >= this.airportCapacity;
  },
};

export default airport;
