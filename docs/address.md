# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/:contactId/addresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jl. Ronggokusumo",
  "city": "Pati",
  "province": "Central Java",
  "country": "Indonesia",
  "postal_code": "59154"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Ronggokusumo",
    "city": "Pati",
    "province": "Central Java",
    "country": "Indonesia",
    "postal_code": "59154"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Update Address API

Endpoint : PUT /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Jl. Ronggokusumo",
  "city": "Pati",
  "province": "Central Java",
  "country": "Indonesia",
  "postal_code": "59154"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Ronggokusumo",
    "city": "Pati",
    "province": "Central Java",
    "country": "Indonesia",
    "postal_code": "59154"
  }
}
```

Response Body Error :

```json
{
  "errors": "Country is required"
}
```

## Get Address API

Endpoint : GET /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "street": "Jl. Ronggokusumo",
    "city": "Pati",
    "province": "Central Java",
    "country": "Indonesia",
    "postal_code": "59154"
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## List Addresses API

Endpoint : GET /api/contacts/:contactId/addresses

Headers :

- Authorization : token

Query params :

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "street": "Jl. Ronggokusumo",
      "city": "Pati",
      "province": "Central Java",
      "country": "Indonesia",
      "postal_code": "59154"
    },
    {
      "id": 2,
      "street": "Jl. Ronggokusumo",
      "city": "Pati",
      "province": "Central Java",
      "country": "Indonesia",
      "postal_code": "59154"
    }
  ],
  "paging": {
    "page": 1,
    "total_page": 3,
    "total_item": 30
  }
}
```

Response Body Error :

```json
{
  "errors": "Contact is not found"
}
```

## Remove Address API

Endpoint : DELETE /api/contacts/:contactId/addresses/:addressId

Headers :

- Authorization : token

Response Body Error :

```json
{
  "data": "ok"
}
```

Response Body Error :

```json
{
  "errors": "Address is not found"
}
```
