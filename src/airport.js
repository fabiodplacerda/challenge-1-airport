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
  planeExistsInAirport: function (plane) {
    return this.planesAtAirport.some(
      (planeInArray) => plane.planeId === planeInArray.planeId
    );
  },
  landPlane: function (plane) {
    if (plane) {
      if (!this.isAirportFull() && !this.planeExistsInAirport(plane)) {
        this.planesAtAirport.push(plane);
      }
    }
  },
};

export default airport;
