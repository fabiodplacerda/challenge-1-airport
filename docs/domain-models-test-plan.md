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

As a Traffic controller
I want to be able to check if the airport is at capacity
So that the airport doesn't overflow
