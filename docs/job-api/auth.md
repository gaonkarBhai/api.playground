---
sidebar_position: 1
---

# Authentication

The [Job-API](https://job-api-brown.vercel.app/) provides user authentication to secure access to its endpoints. Authentication is required to ensure that only authorized users can perform certain actions. Without proper authentication, requests will receive an error response.

## Authentication Endpoints

### Register a New User

**Endpoint:** `POST /auth/register`

Register a new user by providing their name, email, and password. This endpoint creates a new user account and provides a token upon successful registration.

#### Request Body:
``` http title=http
POST https://job-api-brown.vercel.app/api/v1/auth/register
```
```json title=json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Response (Success):
```json title=json
{
  "token": "your_jwt_token_here",
  "success": true,
  "user": {
    "name": "John Doe",
    "email": "john@example.com",
    "_id": "64dceee96e2db27f33de306b",
    "__v": 0
  }
}
```

#### Response (Field Missing):
```json title=json
{
  "message": "The request is missing the required parameter value",
  "success": false
}
```
### Log In User

**Endpoint:** POST `/auth/login`

Logs in an existing user and provides a token upon successful login.

#### Request Body:

```json title=json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### Response (Success):
```json title=json
{
  "token": "your_jwt_token_here",
  "success": true,
  "user": {
    "_id": "64dceee96e2db27f33de306b",
    "name": "John Doe",
    "email": "john@example.com",
    "__v": 0
  }
}
```

#### Response (Invalid Credentials):

```json title=json
{
  "message": "invalid email or password",
  "success": false
}
```


**Notes:**

- Upon successful registration or login, a JWT token is provided in the response. This token can be used for subsequent authenticated requests.
- User passwords are encrypted using bcrypt before storing them in the database.
- For both registration and login, make sure to provide the required fields (name, email, and password) in the request body.
- For login, if the email or password is incorrect or missing, you will receive an "invalid email or password" error message.
    
Please ensure you securely handle the JWT tokens and follow best practices for user authentication and authorization in your application.