---
sidebar_position: 5
---
# Delete Job

This document provides instructions for deleting a job using the Job API. When a job is successfully deleted, a response with the deleted job details and a success flag will be returned. In case the job does not exist, an appropriate error message will be returned.

**Endpoint :** `DELETE /jobs/:jobId`

Replace :jobId in the endpoint with the actual ID of the job you wish to delete.

### Example

#### Request

```http
DELETE https://job-api-brown.vercel.app/api/v1/job/64ddfeb4a007a61ccecedf4b
```

#### Responce 

If the job is successfully deleted:

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
If the job does not exist:

```json title="json"
{
    "message": "No job found",
    "success": false
}
```
**Notes :**
- Make sure to replace :jobId in the endpoint with the actual ID of the job you want to delete.
- A successful deletion will result in a response containing the details of the deleted job and a success flag set to true.
- If the job to be deleted does not exist, the response will contain an error message and a success flag set to false.
Please ensure you have the necessary authorization and permissions before performing job deletions using the API.