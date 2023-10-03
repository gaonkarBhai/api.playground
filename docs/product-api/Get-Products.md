---
sidebar_position: 1
---
# Getting All Products 

The Product API provides an endpoint to retrieve information about various products available. This documentation outlines how to use the API to fetch a list of all products along with their details.

**Base URL** <br/>
`https://product-api-git-master-gaonkarbhai.vercel.app/`

**End Point** <br/>
GET `api/v1/product` <br/>
This endpoint allows you to retrieve a list of all available products

## Request
To get all products, you need to make a simple HTTP GET request to the endpoint mentioned above.

```bash
GET https://product-api-git-master-gaonkarbhai.vercel.app/api/v1/product
```

## Response
The response will be a JSON object containing an array of product objects, along with some additional metadata.

Response Format

```json title="json"
{
  "products": [
    {
      "_id": "647b7d6d4d01cbc54edb7b21",
      "name": "Apple iPhone 12",
      "featured": false,
      "price": 79999,
      "rating": 4.8,
      "description": "A high-performance smartphone with advanced features",
      "company": "Apple",
      "createdAt": "2023-06-03T17:50:37.858Z",
      "updatedAt": "2023-06-03T17:50:37.858Z",
      "__v": 0
    },
    // ... other product objects ...
  ],
  "nbHits": 26
}

```

### Explanation of Fields
`products` (array): An array of product objects, each representing a product available in the API. 

`_id` (string): The unique identifier for the product.

`name` (string): The name of the product.

`featured` (boolean): Indicates whether the product is featured or not.

`price` (number): The price of the product.

`rating` (number): The average rating of the product.

`description` (string): A description of the product.

`company` (string): The company that manufactures the product.

`createdAt` (string): The date and time when the product was created.

`updatedAt` (string): The date and time when the product was last updated.

`__v` (number): Version information.

`nbHits` (number): The total number of products in the response.


You can use the provided endpoint to fetch a list of all available products along with their details using the Product API. The response will be a JSON object containing an array of product objects. Make sure to handle errors and rate limits as needed when integrating this API into your application.
