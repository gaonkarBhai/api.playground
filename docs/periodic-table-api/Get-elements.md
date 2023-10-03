---
sidebar_position: 2
---

# Get Elements

## Retrieve All Elements

To obtain a list of all elements from the Periodic Table API, you can send a GET request to the following endpoint:

```bash
GET api/v1/elements
```

This request will provide you with a comprehensive list of chemical elements, sorted by atomic number in ascending order. Each element's data includes properties such as atomic number, symbol, name, atomic mass, electronegativity, melting point, boiling point, density, group block, and the year of discovery.

### Example 

**Request**

```http
https://periodic-table-rest-api.vercel.app/api/v1/elements
```
**Responce**
```json
[
    {
        "_id": "64eb6deba62b75e7a12795af",
        "atomicNumber": 1,
        "symbol": "H",
        "name": "Hydrogen",
        "atomicMass": 1.008,
        "electronegativity": 2.2,
        "meltingPoint": -259.14,
        "boilingPoint": -252.87,
        "density": 0.0899,
        "groupBlock": "nonmetal",
        "yearDiscovered": 1766,
        "__v": 0
    },
    ...
]
```
The API will respond with a JSON array containing information about each element, allowing you to access and utilize this data for various educational or testing purposes.



## Retrieve Single Elements

To retrieve specific information about a chemical element from the Periodic Table API, you can send a GET request with the element's ID to the following endpoint:

```bash
GET api/v1/elements/:id
```

Replace :id in the endpoint with the unique ID of the element you want to access. This request will return detailed data about the element, including its atomic number, symbol, name, atomic mass, electronegativity, melting point, boiling point, density, group block, and year of discovery.

### Example 

**Request**

```http
https://periodic-table-rest-api.vercel.app/api/v1/elements/64eb6deba62b75e7a12795d4
```
**Responce**
```json
{
    "_id": "64eb6deba62b75e7a12795d4",
    "atomicNumber": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "atomicMass": 87.62,
    "electronegativity": 0.95,
    "meltingPoint": 777,
    "boilingPoint": 1377,
    "density": 2.64,
    "groupBlock": "alkaline earth metal",
    "yearDiscovered": 1790,
    "__v": 0
}
```
The API will respond with a JSON object containing the specific information for the element associated with the provided ID. This allows you to fetch detailed data for a particular element of interest.


:::tip Note
Please note that this endpoint does not require any authentication, making it easy to access and retrieve element data effortlessly.