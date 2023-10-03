---
sidebar_position: 3
---

# Get Job

The Job API offers two endpoints for retrieving job information based on user authorization.

## Get a Specific Job by ID

**Endpoint:**
` GET /job/:id`

This endpoint allows an authorized user to retrieve a specific job by its unique ID.

Request URL Parameters:
`id`: The ID of the job to be retrieved.
### Example 

#### Request:
```http 
GET https://job-api-brown.vercel.app/api/v1/job/64ddfeb4a007a61ccecedf4b
```
#### Response (Success):
```json title="json"
{
    "job": {
        "_id": "64ddfeb4a007a61ccecedf4b",
        "company": "Joe companies",
        "position": "CEO",
        "status": "declined",
        "createdBy": "64dceee96e2db27f33de306b",
        "createdAt": "2023-08-17T11:04:21.000Z",
        "updatedAt": "2023-08-17T11:04:21.000Z",
        "__v": 0
    },
    "success": true
}
```
#### Response (Error):
```json title="json"
{
    "message": "Invalid job ID",
    "success": false
}
```
OR

```json title="json"
{
    "message": "No job found with id 64ddfeb4a007a61ccecedf45",
    "success": false
}
```
## Get All Jobs

**Endpoint:** GET /job

This endpoint retrieves all jobs associated with the authorized user.

### Example

```http
GET https://job-api-brown.vercel.app/api/v1/job
```
#### Response :

```json
{
    "jobs": [
        {
            "_id": "64ddfb1d5cae6dba1686e258",
            "company": "your company name",
            "position": "Job Position",
            "status": "pending",
            "createdBy": "64dceee96e2db27f33de306b",
            "createdAt": "2023-08-17T10:49:01.788Z",
            "updatedAt": "2023-08-17T10:49:01.788Z",
            "__v": 0
        },
       {...}
    ],
    "count": 2
}
```

**Notes:**

- For both endpoints, the authorization mechanism ensures that only the user who created the job can retrieve it.
- The provided code snippets illustrate the backend implementation for retrieving jobs. Ensure you've implemented appropriate middleware for user authentication and error handling.
- For the "Get All Jobs" endpoint, jobs are sorted by their creation time (ascending order).
- In the responses, success indicates the success status of the request, and message provides additional context in case of errors.
- The responses include relevant job details such as title, description, creation timestamp, and more.
- Proper error handling and data validation are essential to ensure the security and reliability of the API.