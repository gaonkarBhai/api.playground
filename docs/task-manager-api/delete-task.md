# Delete Task

The Delete Task endpoint of the Task Manager API allows you to remove a specific task using its unique identifier (ID). This endpoint requires a DELETE request and provides a JSON response confirming the deletion of the task.

Base URL: `https://task-manager-api-alpha.vercel.app/`

Endpoint: `api/v1/task/{task_id}`

Replace {task_id} with the actual ID of the task you want to update

## Example

### Request

```http
DELETE https://task-manager-api-alpha.vercel.app/api/v1/task/64799c0b07be72b2d962cbb6
```
This endpoint deletes the task with the given ID.

### Responce
The response will be a JSON object with the following structure:
```json
{
    "message": "Task deleted",
    "task": {
        "_id": "64799c0b07be72b2d962cbb6",
        "name": "wash dish",
        "completed": false,
        "createdAt": "2023-06-02T07:36:43.052Z",
        "updatedAt": "2023-08-26T12:04:51.739Z",
        "__v": 0
    },
    "success": true
}
```

**Fields:**


message (string): A confirmation message indicating that the task has been deleted.
task (object): An object containing the details of the deleted task, including its ID, name, completion status, creation date, and update date.
success (boolean): Indicates the success status of the request. It will be true if the request was successful.