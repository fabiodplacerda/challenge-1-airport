import { assertEquals, toEqual } from "./test-framework/test-framework.js";
import airport from "../src/airport.js";

// After Each test function
const afterEach = () => {
  airport.airportCapacity = 10;
  airport.planesAtAirport = [];
  actual = undefined;
  expected = undefined;
  result = undefined;
};

//? Test 1
console.log(
  "TEST 1: Check if the capacity has changed when changeCapacity() is called with a number "
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

//? Test 6
console.log("TEST 6: test that checks if the plane is already at the airport");
console.log(`==================`);

// Arrange
let planeTest = { planeId: "1" };
airport.planesAtAirport = [{ planeId: "1" }];
expected = true;

// Act
actual = airport.planeExistsInAirport(planeTest);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 6

//? Test 7
console.log(
  "TEST 7: test that checks if planeExistsInAirport() reports back as false when the plane is not at the airport"
);
console.log(`==================`);

// Arrange
planeTest = { planeId: "2" };
airport.planesAtAirport = [{ planeId: "1" }];
expected = false;

// Act
actual = airport.planeExistsInAirport(planeTest);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 7

//? Test 8
console.log(
  "TEST 8: test that checks if planeExistsInAirport() works when the the airport is empty"
);
console.log(`==================`);

// Arrange
planeTest = { planeId: "2" };
expected = false;

// Act
actual = airport.planeExistsInAirport(planeTest);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 8

//? Test 9
console.log(
  "TEST 9: land a plane at the airport and expect the array (planesAtAirport) to have its length increased by 1"
);
console.log(`==================`);

// Arrange
expected = airport.planesAtAirport.length + 1;

// Act
airport.landPlane({ planeId: "1" });
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 9

//? Test 10
console.log(
  "TEST 10: test that the plane passed in landPlane() exists after it's called"
);
console.log(`==================`);

// Arrange
planeTest = { planeId: "5" };
airport.planesAtAirport = [
  { planeId: "1" },
  { planeId: "2" },
  { planeId: "3" },
];
expected = true;

// Act
airport.landPlane(planeTest);
actual = airport.planesAtAirport.includes(planeTest);

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 10

//? Test 11
console.log(
  "TEST 11: test that checks that planes are not allowed to land when the airport is full"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(2);
airport.planesAtAirport = [{ planeId: "1" }, { planeId: "2" }];
expected = airport.planesAtAirport.length;

// Act
airport.landPlane({ planeId: "1" });
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 11

//? Test 12
console.log(
  "TEST 12: test that checks that the plane is not allowed to land if it already exists in the airport"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(3);
airport.planesAtAirport = [{ planeId: "1" }, { planeId: "2" }];
expected = airport.planesAtAirport.length;

// Act
airport.landPlane({ planeId: "1" });
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 12

//? Test 13
console.log(
  "TEST 13: test that checks plane passed in the landPlane is not undefined/null value"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(3);
airport.planesAtAirport = [{ planeId: "1" }, { planeId: "2" }];
expected = airport.planesAtAirport.length;

// Act
airport.landPlane(null);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 13

//? Test 14
console.log(
  "TEST 14: takeoff a plane from the airport and expect the array (planesAtAirport) to have its length decrease by 1"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(2);
planeTest = { planeId: "1" };
airport.planesAtAirport = [{ planeId: "1" }, { planeId: "2" }];
expected = airport.planesAtAirport.length - 1;

// Act
airport.takeOffPlane(planeTest);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 14

//? Test 15
console.log(
  "TEST 15: test checks that the plane passed in takeOffPlane() is removed from the array (planesAtAirport) after the function is called"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(5);
planeTest = { planeId: "3" };
airport.planesAtAirport = [
  { planeId: "1" },
  { planeId: "2" },
  { planeId: "3" },
  { planeId: "4" },
  { planeId: "5" },
];
expected = [
  { planeId: "1" },
  { planeId: "2" },
  { planeId: "4" },
  { planeId: "5" },
];

// Act
airport.takeOffPlane(planeTest);
actual = airport.planesAtAirport;

// Assert
result = toEqual(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 15

//? Test 16
console.log(
  "TEST 16: test that checks you can't remove a plane that doesn't exist in the array (planesAtAirport)"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(2);
planeTest = { planeId: "3" };
airport.planesAtAirport = [{ planeId: "1" }, { planeId: "2" }];
expected = airport.planesAtAirport.toString();

// Act
airport.takeOffPlane(planeTest);
actual = airport.planesAtAirport.toString();

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 16

//? Test 17
console.log(
  "TEST 17: test that checks you can't remove a plane that is null/undefined from the array (planesAtAirport)"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(2);
planeTest = undefined;
airport.planesAtAirport = [{ planeId: "1" }, { planeId: "2" }];
expected = [{ planeId: "1" }, { planeId: "2" }];

// Act
airport.takeOffPlane(planeTest);
actual = airport.planesAtAirport;

// Assert
result = toEqual(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 17

//? Test 18
console.log(
  "TEST 18: test that checks that the plane can't land if the weather is stormy"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(2);
let weather = "stormy";
airport.planesAtAirport = [{ planeId: "1" }];
expected = airport.planesAtAirport.length;

// Act
airport.landPlane({ planeId: "2" }, weather);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
afterEach();

//! END OF TEST 18

//? Test 19
console.log(
  "TEST 19: test that checks that the plane can't take off if the weather is stormy"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(3);
weather = "stormy";
airport.planesAtAirport = [
  { planeId: "1" },
  { planeId: "2" },
  { planeId: "3" },
];
expected = airport.planesAtAirport.length;

// Act
airport.takeOffPlane({ planeId: "2" }, weather);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);

// Clean Up
afterEach();

//! END OF TEST 19

//? Test 20
console.log(
  "TEST 20: test that checks that the plane can land if the weather is not stormy"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(2);
weather = "sunny";
airport.planesAtAirport = [{ planeId: "1" }];
expected = airport.planesAtAirport.length + 1;

// Act
airport.landPlane({ planeId: "2" }, weather);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
afterEach();

//! END OF TEST 20

//? Test 21
console.log(
  "TEST 21: test that checks that the plane can take off if the weather is not stormy"
);
console.log(`==================`);

// Arrange
airport.changeCapacity(3);
weather = "sunny";
airport.planesAtAirport = [
  { planeId: "1" },
  { planeId: "2" },
  { planeId: "3" },
];
expected = airport.planesAtAirport.length - 1;

// Act
airport.takeOffPlane({ planeId: "2" }, weather);
actual = airport.planesAtAirport.length;

// Assert
result = assertEquals(actual, expected);

// Result
console.log(result ? `Pass` : `Fail`);
!result && console.log(`Expected: ${expected}; Actual: ${actual}`);
console.log(`==================`);
// Clean Up
afterEach();

//! END OF TEST 21
