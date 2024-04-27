# Domain Models and Test Plan

## User Stories

As an Airport manager\
I want to be able to change the capacity\
So that I can increase or decrease as I see fit

| Objects | Properties                 | Messages                               | Output. |
| ------- | -------------------------- | -------------------------------------- | ------- |
| Airport | - airportCapacity @Integer | - changeCapacity(newCapacity @Integer) | @Void   |

As a Traffic controller\
I want to be able to check if the airport is at capacity\
So that the airport doesn't have more planes than what is allowed to have

| Objects | Properties                       | Messages          | Output.  |
| ------- | -------------------------------- | ----------------- | -------- |
| Airport | - planesAtAirport @Array[@Plane] | - isAirportFull() | @Boolean |
|         | - airportCapacity @Integer       |                   |          |

As a Traffic controller\
I want to be able to check if the plane that is going to land is already at the airport\
So that the airport doesn't have duplicate planes

| Objects | Properties                       | Messages                       | Output.  |
| ------- | -------------------------------- | ------------------------------ | -------- |
| Airport | - planesAtAirport @Array[@Plane] | - planeExistsInAirport(@Plane) | @Boolean |
| Plane   | id @String                       |                                |          |

As a Traffic controller\
I want to be able to instruct planes to land\
So that planes can land at the airport

| Objects | Properties                       | Messages            | Output. |
| ------- | -------------------------------- | ------------------- | ------- |
| Plane   | - id @String                     |                     |         |
| Airport | - planesAtAirport @Array[@Plane] | - landPlane(@Plane) | @Void   |

As a Traffic controller\
I want to be able to check if the plane that is going to take off exists at the airport\
So that no non-existing planes can take off from the airport

| Objects | Properties                       | Messages                       | Output.  |
| ------- | -------------------------------- | ------------------------------ | -------- |
| Plane   | id @String                       |                                |          |
| Airport | - planesAtAirport @Array[@Plane] | - planeExistsInAirport(@Plane) | @Boolean |

As a Traffic controller\
I want to be able to instruct the planes to take off \
So that planes can departure from the airport

| Objects | Properties                       | Messages               | Output. |
| ------- | -------------------------------- | ---------------------- | ------- |
| Plane   | id @String                       |                        |         |
| Airport | - planesAtAirport @Array[@Plane] | - takeOffPlane(@Plane) | @Void   |

As a Traffic Controller\
I want to be able to check the current weather\
So that I can make informed decisions about plane landings and takeoffs.

| Objects | Properties | Messages            | Output  |
| ------- | ---------- | ------------------- | ------- |
| Weather | weatherNow | getCurrentWeather() | @String |

As a Traffic Controller\
I want to be able to check if it's stormy\
So that I plan my next decisions about landing and takeoff a plane.

| Objects | Properties         | Messages   | Output   |
| ------- | ------------------ | ---------- | -------- |
| Weather | weatherNow @String | isStormy() | @Boolean |

As a Traffic Controller\
I want to prevent planes from landing when the weather is stormy\
So that I can ensure passenger safety.

| Objects | Properties                       | Messages                        | Output   |
| ------- | -------------------------------- | ------------------------------- | -------- |
| Plane   | id @String                       |                                 |          |
| Weather | weatherNow @String               | isStormy()                      | @Boolean |
| Airport | - planesAtAirport @Array[@Plane] | - landPlane(@Plane, weatherNow) | @Void    |

As a Traffic Controller\
I want to prevent planes from taking off when the weather is stormy\
So that I can ensure passenger safety.

| Objects | Properties                       | Messages                           | Output   |
| ------- | -------------------------------- | ---------------------------------- | -------- |
| Plane   | id @String                       |                                    |          |
| Weather | weatherNow @String               | isStormy()                         | @Boolean |
| Airport | - planesAtAirport @Array[@Plane] | - takeOffPlane(@Plane, weatherNow) | @Void    |
