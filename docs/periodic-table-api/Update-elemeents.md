---
sidebar_position: 3
---
# Update Element

To modify the details of a chemical element in the Periodic Table API, you can send a PATCH request to the following endpoint:

```bash
PATCH api/v1/elements/:id
```
Replace :id in the endpoint with the unique ID of the element you want to update. This request should include a JSON payload containing the specific fields you wish to modify for the element.

## Example

### Request
```http
https://periodic-table-rest-api.vercel.app/api/v1/elements/651beca7c0b231a02b3f815f
```
payload
```json
{
  "density": 21.45
}
```

### Responce
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
The API will respond with the updated details of the element, including any changes you made. This allows you to make adjustments to the properties of an element as needed.

:::danger Note
Do not mislead by updating fields of the element by incorrect data
