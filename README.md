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
    "name": "testing",
    "email": "test@test.com",
    "is_active": true
  },
  {
    "id": 2,
    "name": "bananas",
    "email": "bananas@example.com",
    "is_active": true
  }
]

```

> One User by id: GET to `/users/{user id here}`, with the response output:

```

"id": 4,
"name": "bananas",
"email": "bananas@example.com",
"is_active": true,

```

# Antipodes

> Create an Antipode by id: Post to `locations/{user id goes here}`, with the body:

```

{
    "latitude": 100.54645,
    "longitude": 200.23424,
    "description": "I like this spot!"
}

```

> Get Antipode by user_id: GET to `locations/{user id goes here}/antipodes`, with the output:

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
    "location_id": 4,
    "user_id": 1,
    "latitude": 100.54645,
    "longitude": 200.23424,
    "description": 'WAAAAT'
  },
  {
    "id": 2,
    "location_id": 3,
    "user_id": 1,
    "latitude": -100.76565,
    "longitude": -200.34534,
    "description": 'WAAAAT'
  }],

  [{
    "id": 3,
    "location_id": 2,
    "user_id": 2,
    "latitude": -100.76565,
    "longitude": -200.34534,
    "description": 'WAAAAT'
    }],

  [{
    "id": 4,
    "location_id": 1,
    "user_id": 2,
    "latitude": -100.76565,
    "longitude": -200.34534,
    "description": 'WAAAAT'
  }];


```
