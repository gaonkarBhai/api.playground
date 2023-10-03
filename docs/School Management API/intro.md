# School Management System

The School Management System API provides a set of endpoints to manage various aspects of a school, including administrators, teachers, students, academic years, classes, programs, subjects, exams, questions, results, and more. This API allows you to perform CRUD operations on these entities and is designed to help schools efficiently manage their academic processes.

## Installation and Running Locally

1. Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/gaonkarBhai/School-Management-System.git
cd School-Management-System
```
2. Install the dependencies using the following command:
```bash
npm install
```

3. Run the application using the following command:
```bash
npm start
```
### End Points
| Route                      | Description                                   | Actions Supported                    |
|----------------------------|-----------------------------------------------|--------------------------------------|
| `/api/v1/admins`           | Handles CRUD operations for administrators  | Create, Read, Update, Delete        |
| `/api/v1/teachers`         | Manages teacher information and actions      | Create, Read, Update, Delete        |
| `/api/v1/students`         | Handles student-related operations           | Create, Read, Update, Delete        |
| `/api/v1/academic-years`   | Manages academic years and their data        | Create, Read, Update, Delete        |
| `/api/v1/academic-terms`   | Handles academic term information            | Create, Read, Update, Delete        |
| `/api/v1/class-levels`     | Manages different class levels               | Create, Read, Update, Delete        |
| `/api/v1/programs`         | Handles program information and actions     | Create, Read, Update, Delete        |
| `/api/v1/subjects`         | Manages subjects and their details           | Create, Read, Update, Delete        |
| `/api/v1/year-groups`      | Handles year group-related operations        | Create, Read, Update, Delete        |
| `/api/v1/exams`            | Manages exams and related data               | Create, Read, Update, Delete        |
| `/api/v1/questions`        | Handles questions for exams                  | Create, Read, Update, Delete        |
| `/api/v1/results`          | Manages exam results and associated data     | Create, Read, Update, Delete        |



### API Usage
Create: Use the POST request to create new records for entities like administrators, teachers, students, academic years, programs, subjects, exams, questions, etc.

Read: Use the GET request to retrieve information about these entities.

Update: Employ the PUT request to modify existing records, such as updating administrator details, teacher information, student profiles, etc.

Delete: Utilize the DELETE request to remove records when necessary.

Make sure to provide the required data in the request body as JSON, and follow the API endpoints' naming conventions for each entity.

### Authentication and Authorization
To protect sensitive data and restrict access to specific endpoints, the API may require authentication and authorization. Be sure to consult the API documentation or the project's README for details on how to authenticate and authorize requests.

### Additional Information
For more detailed information, including request [payloads](https://github.com/gaonkarBhai/School-Management-System/tree/master/controllers), [authentication](https://github.com/gaonkarBhai/School-Management-System/tree/master/middlewares), and any additional features, we encourage you to explore the code in the [repository](https://github.com/gaonkarBhai/School-Management-System). Dive into the source code to gain a deeper understanding of how each [endpoint](https://github.com/gaonkarBhai/School-Management-System/tree/master/routes) is implemented and configured. This will provide valuable insights into the API's functionality and how to interact with it effectively.