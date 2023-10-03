---
sidebar_position: 2
---

# Create a New Job

The Job API allows authorized users to create new job listings using the following endpoint.

**Endpoint:**
 POST /job

This endpoint enables an authorized user to create a new job listing.
## Example Request Body

### Request Body:

```json title='json'
{
  "company": "Company Name",
  "position": "Job Position",
  "status": "pending" /* or "interview" or "declined" */,
  /* Other fields if needed */
}
```

### Responce (success):
```json title='json'
{
    "job": {
        "company": "your company name",
        "position": "Job Position",
        "status": "pending",
        "createdBy": "64dceee96e2db27f33de306b",
        "_id": "64ddfb1d5cae6dba1686e258",
        "createdAt": "2023-08-17T10:49:01.788Z",
        "updatedAt": "2023-08-17T10:49:01.788Z",
        "__v": 0
    },
    "success": true
}
```
### Response (Field Missing):
```json title="json"
{
    "message": "feilds can not be empty",
    "success": false
}
```

**Notes:**

- The provided code snippet illustrates the backend implementation for creating jobs. Ensure you have implemented the necessary middleware for user authentication and error handling.
- In the request body, the company, position, and status fields are required. The status field can have one of the following values: "interview", "pending", or "declined".
- The createdBy field is automatically set to the ID of the authorized user who created the job.
- The timestamps option ensures that creation and update timestamps are automatically recorded for each job listing.
- Proper error handling and data validation are essential to ensure the security and reliability of the API.
- Ensure that only authorized users can create jobs to maintain data integrity and security