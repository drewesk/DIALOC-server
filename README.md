# Dialoc API

## Endpoint

* API_URL = https://dialocserver-api.herokuapp.com/

# Users

> Create a user: POST to `/auth/signup`, with the body:

```
{
	"name": "bartholomew",
	"email": "santiago@email.com",
	"password": "mustbeatleast6char"
}
```
> Login as an athenticated user: POST to `/auth/login`, with the body:

```
{
	"email": "santiago@email.com",
	"password": "mustbeatleast6char"
}
```

> All Users: GET to `/users`, with the response output:

```
[
  {
    "id": 1,
    "name": "Rob",
    "email": "berto.ort@gmail.com",
    "password": "$2a$10$SU7mFFQgJBbTpZqIeteFpuvgj7kdi8M8HpWYqpx7Ke6CVkQ/KCYzq",
    "is_active": true,
    "created_at": "2017-06-29T15:53:53.626Z"
  },
  {
    "id": 2,
    "name": "CJ",
    "email": "hello@cjr.co.de",
    "password": "$2a$10$CfeM8yeBYj4S5uBmbgmolOMNX.xCXlQM7wwnEioxTuBhsFh1Kmh3W",
    "is_active": true,
    "created_at": "2017-06-29T15:53:53.716Z"
  },
  {
    "id": 3,
    "name": "testing",
    "email": "test@test.com",
    "password": "$2a$10$PISyRYWWL.o3Lug4edUX3Ontw7/swcL5PrR9U.OwtbVKKNS6qVgv.",
    "is_active": true,
    "created_at": "2017-06-29T15:53:53.804Z"
  },
  {
    "id": 4,
    "name": "bananas",
    "email": "bananas@example.com",
    "password": "$2a$08$mzucwDsDpwcHBrG1CettQekm1quppa3rmxXPjTmMwNIf/VVBb.Biu",
    "is_active": true,
    "created_at": "2017-06-29T15:57:08.091Z"
  }
]

```

> One User by id: GET to `/users/``4`, with the response output:

```
"id": 4,
"name": "bananas",
"email": "bananas@example.com",
"password": "$2a$08$mzucwDsDpwcHBrG1CettQekm1quppa3rmxXPjTmMwNIf/VVBb.Biu",
"is_active": true,
"created_at": "2017-06-29T15:57:08.091Z"
```

# Antipodes

> Create an Antipode by id: Post to `locations/``{user id goes here}` , with the body:

```
{
    "latitude": 100.54645,
    "longitude": 200.23424,
    "description": "I like this spot!"
}

```

> Get Antipode by user_id: GET to `locations/``1``/antipodes`, with the output:

```
[{
    "id": 1,
    "location_id": 1,
    "user_id": 1,
    "latitude": 100.54645,
    "longitude": 200.23424,
    "description": "I'm Dialocked in!"
  },
  {
    "id": 2,
    "location_id": 1,
    "user_id": 1,
    "latitude": -150.76565,
    "longitude": -710.34534,
    "description": 'Love the view!'
  }];

```


> Get All Antipodes: GET to `/locations/antipodes`, with the output

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
