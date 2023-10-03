---
sidebar_position: 1
---

# Get All Mantra's

To retrieve a list of all Hindu mantras and suktam information using the Havyaka Rest API, follow these steps:

**Base URL** <br/>
`https://havyaka-rest-api.vercel.app/`

**Endpoint**:<br/>
 GET `/api/v1/mantras`

This will fetch a list of all mantras along with their details. The response will include an array of mantra objects, each containing information such as the mantra's name, shloka, deity, purpose, origin, and more.

## Example

### Request

```
GET /api/v1/mantras
```

### Responce

```json title="json"
{
  "mantras": [
    {
      "_id": "64897f6fd17f7175cd6a57c8",
      "number": 1,
      "name": "Gayatri Mantra",
      "shloka": "Om Bhur Bhuva Swaha, Tat Savitur Varenyam Bhargo Devasya Dheemahi, Dhiyo Yo Nah Prachodayat",
      "range": "long",
      "godName": "The Sun God (Savitur)",
      "purpose": "The Gayatri Mantra is a sacred Vedic chant...",
      "duration": "Repetition 108 times",
      "origin": "Rigveda",
      "chantingInstructions": "Sit in a calm and quiet place...",
      "benefits": "Enhances spiritual growth...",
      "culturalSignificance": "The Gayatri Mantra holds...",
      "references": [
        {
          "title": "Rigveda",
          "link": "https://www.sacred-texts.com/hin/rigveda/",
          "_id": "64897f6fd17f7175cd6a57c9"
        },
        {
          "title": "Yajurveda",
          "link": "https://www.sacred-texts.com/hin/yv/",
          "_id": "64897f6fd17f7175cd6a57ca"
        }
      ],
      "__v": 0
    },
    // ... more mantras
  ],
  "docNum": 20,
  "success": true
}

```

This straightforward API call allows you to access a comprehensive list of Hindu mantras and suktam for your exploration and test your application.
