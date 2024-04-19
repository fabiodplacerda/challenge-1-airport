const airport = {
  airportCapacity: 10,
  changeCapacity: function (newCapacity) {
    if (typeof newCapacity === "number" && newCapacity >= 0) {
      this.airportCapacity = newCapacity;
    }
  },
};

export default airport;
