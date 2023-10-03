# Get Tasks

## Retrieve all task
The Get Tasks endpoint of the Task Manager API allows you to retrieve a list of tasks stored in the task manager system. This endpoint does not require authentication and provides a JSON response containing task details.

**Base URL:**`https://task-manager-api-alpha.vercel.app/`

**Endpoint:** `api/v1/task`

### Example

#### Request

```http
GET  https://task-manager-api-alpha.vercel.app//api/v1/task
```
This endpoint retrieves a list of tasks from the task manager system.

#### Responce
The response will be a JSON object with the following structure:

```json
{
    "formattedData": [
        {
            
            "id": "64799c0b07be72b2d962cbb6",
            "name": "wash dish",
            "completed": true,
            "createdAt": "79 days ago",
            "updatedAt": "79 days ago"
        },
        {
            "id": "64799c0b07be72b2d962cbb5",
            "name": "example task",
            "completed": false,
            "createdAt": "90 days ago",
            "updatedAt": "80 days ago"
        },
        // ... more tasks
    ],
    "success": true
}
```
## Get Task by ID
The Get Task by ID endpoint of the Task Manager API allows you to retrieve a specific task based on its unique identifier (ID). This endpoint does not require authentication and provides a JSON response containing the details of the requested task.
### Example
#### Request 

```http
GET  https://task-manager-api-alpha.vercel.app//api/v1/task/64799c0b07be72b2d962cbb6
```
#### Responce
```json
{
    "formattedData": [
        {
            
            "id": "64799c0b07be72b2d962cbb6",
            "name": "wash dish",
            "completed": true,
            "createdAt": "79 days ago",
            "updatedAt": "79 days ago"
        },
    ],
    "success": true
}
```

**Feilds :**
- formattedData (array): An array of task objects, each containing the following information:
- name (string): The name or description of the task.
- completed (boolean): Indicates whether the task is completed (true) or not (false).
- createdAt (string): A human-readable string representing the creation date of the task (e.g., "79 days ago").
- updatedAt (string): A human-readable string representing the last update date of the task (e.g., "79 days ago").
- success (boolean): Indicates the success status of the request. It will be true if the request was successful


The Get Tasks endpoint of the Task Manager API allows you to retrieve a list of tasks stored in the system without requiring authentication. The response provides detailed task information including name, completion status, and creation/update dates. Use this endpoint to efficiently retrieve task data from the Task Manager API.