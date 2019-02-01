# TODO Service user Koa and Knex


### To install:
```
  npm install
  createdb todo
  psql todo
  ```
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    \q
  ```
  knex migrate:latest
```

### To run:

```
  npm start
```

Then open your browser to http://localhost:8080/ and verify you get a success response


### List

http://localhost:8080/api/todos

### Show

http://localhost:8080/api/todos/:id

### Create

```
 curl -H "Content-Type: application/json" -X POST http://localhost:8080/api/todo -d '{ "message": "test foo", "completed": false }'
```

### Update

```
  curl -H "Content-Type: application/json" -X PUT http://localhost:8080/api/todo/1e3be3c5-e65d-47f0-b5db-5736a40aec78 -d '{ "message": "test foo UPDATED", "completed": true }'
```

### Delete

```
  curl -X DELETE http://localhost:8080/api/todo/1e3be3c5-e65d-47f0-b5db-5736a40aec78
```
