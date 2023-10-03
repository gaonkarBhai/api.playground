---
sidebar_position: 4
---
# Update A Job

This document provides instructions for updating a job by its ID using the Job API. When a job is successfully updated, a response with the updated job details and a success flag will be returned.

**Endpoint :** `PATCH /api/v1/job/:id`

Replace :id in the endpoint with the actual ID of the job you wish to update.

## Example

### Request:

```http
https://job-api-brown.vercel.app/api/v1/job/64ddfb1d5cae6dba1686e258
```

Request Body:

The request body should contain the fields that you want to update for the job. For example:

```json
{
    "company": "your company name",
    "position": "Job Position",
    "status": "pending"
}
```

### Responce:

```json
{
    "job": {
        "_id": "64ddfb1d5cae6dba1686e258",
        "company": "Updated company name",
        "position": "Updated position",
        "status": "updated",
        "createdBy": "64dceee96e2db27f33de306b",
        "createdAt": "2023-08-17T10:49:01.788Z",
        "updatedAt": "2023-08-19T09:03:59.433Z",
        "__v": 0
    },
    "success": true
}
```

if id does not exist:

```json
{
    "job": null,
    "success": true
}
```

**Notes :**
- Ensure you provide the correct job ID in the request URL to update the intended job.
- The request body should contain the fields you want to update for the job.
- A successful update will result in a response containing the updated job details and a success flag set to true.
- Please ensure you have the necessary authorization and permissions before performing job updates using the API.