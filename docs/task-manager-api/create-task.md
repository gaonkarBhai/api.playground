# Create a New Task

The Create Task endpoint of the Task Manager API enables you to add a new task to the task manager system. This endpoint accepts a JSON payload with the task details, including the task name and completion status. No authentication is required to use this endpoint.

**Base URL:** https://task-manager-api-alpha.vercel.app/

**Endpoint:** /api/v1/task

## Example

### Request
```http
POST https://task-manager-api-alpha.vercel.app//api/v1/task
```
This endpoint allows you to create a new task in the task manager system.

Request Payload
The request payload should be a JSON object with the following fields:

name (string, required): The name or description of the new task.
completed (boolean, required): Indicates whether the task is completed (true) or not (false).

```json
{
    "name": "Buy groceries",
    "completed": false
}
```

### Responce
The response will be a JSON object with the following structure:
```json
{
    "name": "Buy groceries",
    "completed": false,
    "createdAt": "0 seconds ago",
    "updatedAt": "0 seconds ago",
    "success": true
}
```

if feild is missing
```json
{
    "message": "feild must be provided"
}
```
- name (string): The name or description of the task.
- completed (boolean): Indicates whether the task is completed (true) or not (false).
- createdAt (string): A human-readable string representing the creation date of the task (e.g., "0 seconds ago").
- updatedAt (string): A human-readable string representing the last update date of the task (e.g., "0 seconds ago").
- success (boolean): Indicates the success status of the request. It will be true if the request was successful.
