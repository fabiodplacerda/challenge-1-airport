import { assertEquals } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";

// After Each test function
const afterEach = () => {
  airport.airportCapacity = 10;
  airport.planesAtAirport = [];
};

//? Test 1
console.log(
  "TEST 1: Check if the capacity has change when changeCapacity() is called with a number "
);
console.log(`==================`);

// Arrange
let newCapacity = 2;
let expected = newCapacity;
let actual, result;
// Act
airport.changeCapacity(newCapacity);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 1

//? Test 2
console.log(
  "TEST 2: Check if changeCapacity() doesn't modify the capacity if it's called with no number"
);
console.log(`==================`);

// Arrange
newCapacity = "hello";
expected = 10;

// Act
airport.changeCapacity(newCapacity);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 2

//? Test 3
console.log(
  "TEST 3: Check if changeCapacity() doesn't modify the capacity if the number passed in is lower than 0"
);
console.log(`==================`);

// Arrange
newCapacity = -1;
expected = 10;

// Act
airport.changeCapacity(newCapacity);
actual = airport.airportCapacity;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 3

//? Test 4
console.log(
  "TEST 4: test that checks if the airport is full using isAirportFull() and if it is it should return true"
);
console.log(`==================`);

// Arrange
airport.airportCapacity = 2;
let planesArrayTest = [{ planeId: "1" }, { planeId: "2" }];
expected = true;

// Act
airport.planesAtAirport = planesArrayTest;
actual = airport.isAirportFull();

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 4

//? Test 5
console.log(
  "TEST 5: test that checks if the airport is full using isAirportFull() and if it isn't it should return false"
);
console.log(`==================`);

// Arrange
planesArrayTest = [{ planeId: "1" }, { planeId: "2" }];
expected = false;

// Act
airport.planesAtAirport = planesArrayTest;
actual = airport.isAirportFull();

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 5
