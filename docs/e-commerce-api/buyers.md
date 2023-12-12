# Buyers APIs

## Get List of Sellers

- Endpoint: GET /api/buyer/list-of-sellers
- Description: Retrieves a list of all sellers registered in the marketplace.

### Example

#### Request

```http
GET https://unitylabs-assignment.vercel.app/api/buyer/list-of-sellers
```

#### Response

```json
{
    "success": true,
    "counTotal": 1,
    "message": "All sellers retrived successfully",
    "sellers": [
        {
            "_id": "657641a63fc138c543467e64",
            "name": "demo",
            "role": "seller",
            "createdAt": "2023-12-10T22:54:30.623Z",
            "updatedAt": "2023-12-10T22:54:30.623Z",
            "__v": 0
        },
        //...
    ]
}
```

## Get Seller's Catalog

- Endpoint: GET /api/buyer/seller-catalog/:seller_id
- Description: Retrieves the catalog of a specific seller identified by seller_id

### Example

#### Request

```http
GET https://unitylabs-assignment.vercel.app/api/buyer/seller-catalog/:seller_id
```
#### Responce
```json
{
    "success": true,
    "message": "Catalog retrived successfully",
    "catalog": [
        {
            "_id": "6577ca8a19c44391627a6bda",
            "seller_id": "657641a63fc138c543467e64",
            "catalog_name": "1st catalog",
            "catalog_description": "some description",
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
            "createdAt": "2023-12-12T02:50:50.531Z",
            "updatedAt": "2023-12-12T02:50:50.531Z",
            "__v": 0
        },
        //....
    ]
}
```
## Create Order
- Endpoint: POST /api/buyer/create-order/:seller_id
- Description: Sends a list of items to create an order for the specified seller with id = seller_id

### Example

#### Request

```http
POST https://unitylabs-assignment.vercel.app/api/buyer/create-order/seller_id
```
Request body:

```json
{
    "buyer_id":"6578037c95c1654a564e973b",
    "products":[
            "6577ca5319c44391627a6bd7"
    ]
}
```
#### Response

```json
{
    "success": true,
    "message": "order successfully",
    "catalog": {
        "buyer_id": "6578037c95c1654a564e973b",
        "seller_id": "657641a63fc138c543467e64",
        "products": [
            "6577ca5319c44391627a6bd7"
        ],
        "_id": "65780f96e066b03587196a9a",
        "createdAt": "2023-12-12T07:45:26.416Z",
        "updatedAt": "2023-12-12T07:45:26.416Z",
        "__v": 0
    }
}
```
**Note**
- for this you needs to be an authenticated buyer.