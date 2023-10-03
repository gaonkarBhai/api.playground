# Update Task

The Update Task endpoint of the Task Manager API allows you to modify the details of a specific task using its unique identifier (ID). This endpoint requires a PATCH request and provides a JSON response containing the updated task details.

Base URL: `https://task-manager-api-alpha.vercel.app/`

Endpoint: `api/v1/task/{task_id}`

Replace {task_id} with the actual ID of the task you want to update

## Example

### Request 
```http
PATCH https://task-manager-api-alpha.vercel.app/api/v1/task/64799c0b07be72b2d962cbb6
```

body
```json
{
    "completed": false
}
```
This example updates the completed field to false.
### Responce
The response will be a JSON object with the following structure:
```json
{
    "name": "wash dish",
    "completed": false,
    "createdAt": "85 days ago",
    "updatedAt": "0 seconds ago",
    "success": true
}
```

If the task with the provided ID does not exist

```json
{
    "message": "error in fetching the task",
    "success": false
}
```