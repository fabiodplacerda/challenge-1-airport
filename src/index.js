import { plane1, plane2, plane3, plane4, plane5, plane6 } from "./planes.js";
import weather from "./weather.js";
import airport from "./airport.js";

// Change Airport capacity
airport.changeCapacity(5);
console.log("Airport capacity:", airport.airportCapacity);

// Checking if the Airport is full before we start to land planes
console.log("Is Airport full?", airport.isAirportFull());

// Landing planes
airport.landPlane(plane1);
airport.landPlane(plane1); // This plane won't be added to the airport since it has already been added
airport.landPlane(plane2);
airport.landPlane(plane3);
airport.landPlane(plane4);
airport.landPlane(plane5);
airport.landPlane(plane6); //This plane won't be added to the airport since it is at capacity

console.log("Planes at the airport at the moment:", airport.planesAtAirport);

console.log("Is Airport full?", airport.isAirportFull());

// Checks if plane exists in Airport
console.log(
  "Does Plane 4 exists in the Airport?",
  airport.planeExistsInAirport(plane4)
);

// Take off planes from the Airport
airport.takeOffPlane(plane2);
airport.takeOffPlane(plane4);

console.log("Planes at the airport at the moment:", airport.planesAtAirport);

console.log(
  "Does Plane 4 exists in the Airport?",
  airport.planeExistsInAirport(plane4)
);

// Taking off a plane that doesn't exist in the Airport has no effect
airport.takeOffPlane(plane2);
console.log(airport.planesAtAirport);

// Generate random weather
weather.generateRandomWeather();
console.log("Weather now:", weather.getCurrentWeather());

// Landing a plane when the weather is sunny
weather.weatherNow = "sunny";
let theWeatherNow = weather.weatherNow;

airport.landPlane(plane6, theWeatherNow);
console.log("Planes at the airport at the moment:", airport.planesAtAirport);

// Taking off a plane when the weather is sunny

airport.takeOffPlane(plane1, theWeatherNow);
console.log("Planes at the airport at the moment:", airport.planesAtAirport);

// Landing a plane when the weather is stormy
weather.weatherNow = "stormy";
theWeatherNow = weather.weatherNow;

airport.landPlane(plane4, theWeatherNow); // This plane won't be added to the airport since the weather is stormy
console.log("Planes at the airport at the moment:", airport.planesAtAirport);

// Taking off a plane when the weather is stormy

airport.takeOffPlane(plane2, theWeatherNow); // This plane won't be removed from the airport since the weather is stormy

console.log("Planes at the airport at the moment:", airport.planesAtAirport);
