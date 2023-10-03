---
sidebar_position: 2
---
# Query Parameters
The Havyaka Rest API offers versatile mantra retrieval with query parameters. Tailor your results using parameters like limit, sort, fields, range, and name for a customized exploration of Hindu mantras and suktam.

## Queries

**`limit` :** 
Limits the number of results returned.
Type: Integer
Default: 5
Example: limit=10

**`sort` :**
Specifies the sorting order of the results.
Type: String (Comma-separated list of fields)
Default: Sorted by "number" field
Example: sort=name,-number

**`range` :**
Filters results by the "range" field.
Type: String
Example: range=long

**`name` :**
Performs a case-insensitive search for the provided string value in the "name" field.
Type: String
Example: name=Gayatri Mantra

## Example Request with Query Parameters

### Request

```http
GET /api/v1/mantras?name=Gayatri%20Mantra&sort=-number&limit=1
```
### Responce

```json title="json"
{
  "mantras": [
    {
    "_id": "64897f6fd17f7175cd6a57ed",
    "number": 18,
    "name": "Surya Gayatri Mantra",
    "shloka": "Om Bhaskaraya Vidmahe, Divakaraya Dhimahi, Tanno Suryah Prachodayat",
    "range": "long",
    "godName": "The Sun God (Surya)",
    "purpose": "The Surya Gayatri mantra is a sacred chant dedicated to the Sun God (Surya). It is chanted to seek his blessings for vitality, energy, and enlightenment.",
    "duration": "Repetition 108 times",
    "origin": "Rigveda",
    "chantingInstructions": "Sit in a calm and quiet place, focus your attention on the divine qualities of the Sun God, and chant the mantra with sincerity and devotion. Repeat it 108 times using a mala (prayer beads) if possible.",
    "benefits": "Enhances physical and mental energy, promotes good health and vitality, stimulates intellectual abilities, and bestows divine blessings.",
    "culturalSignificance": "The Surya Gayatri mantra holds immense cultural and spiritual significance in Hinduism and is considered a powerful invocation to the Sun God.",
    "references": [
        {
        "title": "Rigveda",
        "link": "https://www.sacred-texts.com/hin/rigveda/",
        "_id": "64897f6fd17f7175cd6a57ee"
        }
      ],
    "__v": 0
    }
  ],
  "docNum": 1,
  "success": true
}
```

You can use these query parameters to customize your mantra retrieval based on your preferences and requirements. Simply include the desired parameters in your API request to get tailored results.