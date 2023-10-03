---
sidebar_position: 2
---

# Query Parameters


The Product API provides a range of query parameters that allow you to customize and refine your product retrieval requests. This documentation outlines the available query parameters and how to use them effectively.


When making a GET request to the endpoint, you can use the following query parameters to tailor your product retrieval:

1. `featured`
Description: Filter products by their featured status.
Example: featured=true

2. `rating`
Description: Filter products by their rating (numeric value).
Example: rating=4

3. `company`
Description: Filter products by company name (string value).
Example: company=Apple

4. `name`
Description: Search for product names containing the provided value.
Example: name=iPhone

5. `sort`
Description: Sort the results by field names. Use a hyphen (-) prefix for descending order.
Example: sort=-price,name

6. `page`
Description: Specify the page number for paginated results.
Example: page=2

7. `limit`
Description: Specify the number of results per page.
Example: limit=10


## Example Usage
### Request

To fetch featured products having rating 4.5 and limit 2 you can construct the following 
```bash
https://product-api-git-master-gaonkarbhai.vercel.app/api/v1/product?limit=2&rating=4.5
```

### Response

The response will provide a list of products that match the specified criteria.

``` json title="json"
{
"products": [
  {
  "_id": "647b7d6d4d01cbc54edb7b25",
  "name": "Under Armour Sports T-Shirt",
  "featured": true,
  "price": 1999,
  "rating": 4.5,
  "description": "A comfortable and breathable t-shirt for sports and workouts",
  "company": "Under Armour",
  "createdAt": "2023-06-03T17:50:37.859Z",
  "updatedAt": "2023-06-03T17:50:37.859Z",
  "__v": 0
  },
  {
  "_id": "647b7d6d4d01cbc54edb7b29",
  "name": "Lululemon Yoga Mat",
  "featured": false,
  "price": 3999,
  "rating": 4.5,
  "description": "A high-quality yoga mat for your workout sessions",
  "company": "Lululemon",
  "createdAt": "2023-06-03T17:50:37.859Z",
  "updatedAt": "2023-06-03T17:50:37.859Z",
  "__v": 0
  }
],
"nbHits": 2
}
```

Utilizing query parameters with the Product API allows you to retrieve specific products that meet your criteria, sort and limit the results, and customize the fields you receive. Experiment with different combinations of query parameters to fine-tune your product retrieval experience.