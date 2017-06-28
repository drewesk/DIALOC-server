# Dialoc API

## Endpoint

* API_URL = https://dialocserver-api.herokuapp.com/

## Examples
> Create a user: POST to `/auth/signup`, with the body

```
{
	"name": "bartholomew",
	"email": "santiago@email.com",
	"password": "mustbeatleast6char"
}
```
> Login as an athenticated user: POST to `/auth/login`, with the body

```
{
	"email": "santiago@email.com",
	"password": "mustbeatleast6char"
}
```

> All Users: GET to `/users`, with the response output

```
{
id: 1,
name: '',
email: '',
password: '',

id: 2,
name: '',
email: '',
password: '',

id: 3,
name: '',
email: '',
password: '',

}
```

> One User by id: GET to `/users/1`, with the response output

```
{
id: 1,
name: '',
email: '',
password: '',
}
```

> Get Antipode by id: GET to `/users/1/antipodes`, with the output

```
[{
    "id": 1,
    "location_a_id": 1,
    "location_b_id": 1,
    "favorite": false,
    "user_id": 1,
    "latitude": 100.54645,
    "longitude": 200.23424,
    "description": null
  },
  {
    "id": 2,
    "location_a_id": 1,
    "location_b_id": 1,
    "favorite": false,
    "user_id": 1,
    "latitude": -100.76565,
    "longitude": -200.34534,
    "description": null
  }];

```


> Get All Antipodes: GET to `/users/antipodes`, with the output

```
[{
    "id": 1,
    "location_a_id": 1,
    "location_b_id": 1,
    "favorite": false,
    "user_id": 1,
    "latitude": 100.54645,
    "longitude": 200.23424,
    "description": 'WAAAAT'
  },
  {
    "id": 2,
    "location_a_id": 1,
    "location_b_id": 1,
    "favorite": false,
    "user_id": 1,
    "latitude": -100.76565,
    "longitude": -200.34534,
    "description": 'WAAAAT'
  }],

  [{
    "id": 3,
    "location_a_id": 1,
    "location_b_id": 1,
    "favorite": false,
    "user_id": 2,
    "latitude": -100.76565,
    "longitude": -200.34534,
    "description": 'WAAAAT'
    }],

  [{
    "id": 4,
    "location_a_id": 1,
    "location_b_id": 1,
    "favorite": false,
    "user_id": 2,
    "latitude": -100.76565,
    "longitude": -200.34534,
    "description": 'WAAAAT'
  }];


```

