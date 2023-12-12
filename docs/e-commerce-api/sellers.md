# Sellers APIs


## Create Catalog

- Endpoint: /api/seller/create-catalog
- Description: Creates a catalog belonging to a seller with the provided details.

### Example 

#### Request

```http
POST https://unitylabs-assignment.vercel.app/api/seller/create-catalog
```
Request body:

```json
{
    "seller_id":"657641a63fc138c543467e64",
    "catalog_name":"my 1st catalog",
    "catalog_description":"some description",
    "products":[
            "6577ca5319c44391627a6bd7"
    ]
}
```

#### Response

```json
{
    "success": true,
    "message": "catalog created successfully",
    "catalog": {
        "seller_id": "657641a63fc138c543467e64",
        "catalog_name": "my 1st catalog",
        "catalog_description": "some description",
        "products": [
            "6577ca5319c44391627a6bd7"
        ],
        "_id": "657863a24836a09fd895a797",
        "createdAt": "2023-12-12T13:44:02.256Z",
        "updatedAt": "2023-12-12T13:44:02.256Z",
        "__v": 0
    }
}
```
## Retrieve Seller's Orders
- Endpoint: GET /api/seller/orders
- Description: Retrieves the list of orders received by the authenticated seller.

### Example

#### Request

```http
GET https://unitylabs-assignment.vercel.app/api/seller/orders

```

#### Response

```json
{
    "success": true,
    "counTotal": 3,
    "message": "All orders fetched successfully",
    "order": [
        {
            "_id": "6577fe9f421a6def46a01407",
            "buyer_id": "657641a63fc138c543467e64",
            "seller_id": "657641a63fc138c543467e64",
            "products": [
                {
                    "_id": "6577ca5319c44391627a6bd7",
                    "name": "realme 5 pro",
                    "price": 16000,
                    "createdAt": "2023-12-12T02:49:55.375Z",
                    "updatedAt": "2023-12-12T02:49:55.375Z",
                    "__v": 0
                }
            ],
            "createdAt": "2023-12-12T06:33:03.313Z",
            "updatedAt": "2023-12-12T06:33:03.313Z",
            "__v": 0
        },
        //....
    ]
}
```
**Note**
- for this you needs to be an authenticated seller.
- `/create-catalog` endpoint returns a success message along with the created catalog upon successful creation.
- `/orders` endpoint retrieves the list of orders received by the authenticated seller, including details about the buyer and ordered items.