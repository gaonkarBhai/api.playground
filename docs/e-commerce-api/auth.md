# Authentication APIs


## Register a User

- Endpoint: `/api/auth/register`
- Description: Registers a new user with the provided username, password, and user type (buyer/seller).

### Example 

#### Request

```http
POST https://unitylabs-assignment.vercel.app/api/auth/register
```
Request body:

```json
{
  "name": "exampleUser",
  "password": "examplePassword",
  "role": "buyer"
}
```

#### Response

```json
{
    "success": true,
    "message": "User Register Successfully",
    "user": {
        "name": "exampleUser",
        "password": "$2b$10$sDpop4Wu/tUz.NFs0ZcQNe.9QzaexCuxoL8kUmP4poQc3UvVbaGHy",
        "role": "buyer",
        "_id": "6578037c95c1654a564e973b",
        "createdAt": "2023-12-12T06:53:48.101Z",
        "updatedAt": "2023-12-12T06:53:48.101Z",
        "__v": 0
    }
}
```

## User Login
- Endpoint: POST `/api/auth/login`
- Description: Logs in a previously registered user and returns an authentication token.

### Example

#### Request
```http
POST https://unitylabs-assignment.vercel.app/api/auth/login
```
Request body:

```json
{
  "name": "exampleUser",
  "password": "examplePassword"
}
```
#### Responce
```json
{
    "success": true,
    "message": "login successfully",
    "user": {
        "_id": "657641a63fc138c543467e64",
        "name": "exampleUser",
        "role": "buyer"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc2NDFhNjNmYzEzOGM1NDM0NjdlNjQiLCJpYXQiOjE3MDIzNjcyNjMsImV4cCI6MTcwMjk3MjA2M30.PJuQodvLLHiz2Zrwu0-O3MrXA-dLUh9X6R6ptq658e8"
}
```

## User Entities
- Two types: buyers and sellers.
- Users can sign up as buyers or sellers.