import weather from "../src/weather.js";
import { assertEquals } from "./test-framework/test-framework.js";

const afterEach = () => {
  weather.weatherNow = null;
  expected = null;
  actual = null;
  result = null;
};

console.log(`==================`);
console.log(`Weather Test Suite: `);
console.log(`==================`);

//? Test 1
console.log(
  "TEST 1: test that checks when getCurrentWeather is called, it returns a weather type"
);
console.log(`==================`);

// Arrange
let expected = true;
let testWeatherTypes = ["sunny", "cloudy", "light rain", "stormy"];
// Act
weather.generateRandomWeather();
let actual = testWeatherTypes.includes(weather.getCurrentWeather());

// Assert
let result = assertEquals(expected, actual);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean up
afterEach();

//? Test 2
console.log(
  "TEST 2: test that checks when isStormy is called, it returns true if the weather is stormy"
);
console.log(`==================`);

// Arrange
expected = true;
weather.weatherNow = "stormy";
// Act
actual = weather.isStormy();

// Assert
result = assertEquals(expected, actual);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
