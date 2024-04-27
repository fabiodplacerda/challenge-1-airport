const airport = {
  // Initial values for the properties in the Airport object
  airportCapacity: 10,
  planesAtAirport: [],

  // Method that changes the capacity of the Airport
  changeCapacity: function (newCapacity) {
    if (typeof newCapacity === "number" && newCapacity >= 0) {
      this.airportCapacity = newCapacity;
    }
  },

  // Method that checks if the Airport array (planesAtAirport) is full returning a Boolean value
  isAirportFull: function () {
    return this.planesAtAirport.length >= this.airportCapacity;
  },

  // Method that checks if the plane already exists in the Airport array (planesAtAirport) returning a Boolean value
  planeExistsInAirport: function (plane) {
    return this.planesAtAirport.some(
      (planeInArray) => plane.planeId === planeInArray.planeId
    );
  },

  // Method that adds the functionality to add a new Plane to the Airport array (planesAtAirport)
  landPlane: function (plane, weather) {
    if (plane && weather !== "stormy") {
      if (!this.isAirportFull() && !this.planeExistsInAirport(plane)) {
        this.planesAtAirport.push(plane);
      }
    }
  },

  // Method that adds the functionality to remove a Plane from the Airport array (planesAtAirport)
  takeOffPlane: function (plane, weather) {
    if (plane && weather !== "stormy") {
      const newPlanesAtAirport = this.planesAtAirport.filter(
        (planeInArray) => planeInArray.planeId !== plane.planeId
      );
      this.planesAtAirport = newPlanesAtAirport;
    }
  },
};

export default airport;
