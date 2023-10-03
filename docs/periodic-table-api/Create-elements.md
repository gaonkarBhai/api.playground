---
sidebar_position: 1
---

# Create a New Element

To add a new chemical element to the Periodic Table API, you can send a POST request to the following endpoint:

```bash
POST api/v1/elements
```
This request should include a JSON payload containing the details of the new element you want to create. The API will process your request and return the created element with a unique ID.

## Example

### Request
```http
https://periodic-table-rest-api.vercel.app/api/v1/elements/
```
payload

```json
{
  "atomicNumber": 78,
  "symbol": "Pt",
  "name": "Platinum",
  "atomicMass": 195.084,
  "electronegativity": 2.28,
  "meltingPoint": 2041.4,
  "boilingPoint": 4098,
  "density": 21.45,
  "groupBlock": "Transition Metal",
  "yearDiscovered": 1735
}
```

### Response:

```json
{
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
    "_id": "651beca7c0b231a02b3f815f",
    "__v": 0
}
```
The API will respond with the newly created element, including its unique ID. This ID can be used for future retrievals or modifications of the element.