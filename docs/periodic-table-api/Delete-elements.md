---
sidebar_position: 4
---

# Delete Element

To remove a chemical element from the Periodic Table API, you can send a DELETE request to the following endpoint:

```http
DELETE api/v1/elements/:id
```
Replace :id in the endpoint with the unique ID of the element you want to delete.

## Example

### Request

```http
https://periodic-table-rest-api.vercel.app/api/v1/elements/651beca7c0b231a02b3f815f
```
### Response:

```json
{
    "_id": "651beca7c0b231a02b3f815f",
    "atomicNumber": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "atomicMass": 195.084,
    "electronegativity": 2.28,
    "meltingPoint": 2041.4,
    "boilingPoint": 4098,
    "density": 21.45,
    "groupBlock": "Transition Metal",
    "yearDiscovered": 1735,
    "__v": 0
}
```
The API will respond with a confirmation message indicating the successful deletion of the specified element. The element will no longer be available in the database.

:::danger Note
Don't delete any of the element by mistake
if you want to delete elements please run the code locally and try
