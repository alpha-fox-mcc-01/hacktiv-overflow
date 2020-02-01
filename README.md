# hacktiv-overflow

# API Documentation

## **Base Url**
```
http://localhost:3000/
```

## User routes

### Register
* **Url** :
  ```
  /users/register
  ```
* **Method** :

  `POST`
* **Header** :

  `Content-Type: application/x-www-form-urlencoded:`

* **Body** : 
  * username: `String, required`
  * email: `String, required`
  * password: `String, required`

* **Response**
  * Success
    
    Code: 201 (Created)
    ```
    {
      _id: ObjectId,
      username: String,
      email: String,
      password: String, hashed password
    }
    ```
  * Failed
    
    Code: 400 (Bad Request)

    Code: 500 (Internal Server Error)

### Login
* **Url** :
  ```
  /users/login
  ```
* **Method** :

  `POST`

* **Header** :

  `Content-Type: application/x-www-form-urlencoded:`

* **Body** : 
  * email: `String, required`
  * password: `String, required`

* **Response**
  * Success
    
    Code: 200 (OK)
    ```
    {
      _id: ObjectId,
      username: String,
      email: String,
      token: JWT Token
    }
    ```
  * Failed
    
    Code: 400 (Bad Request)

    Code: 500 (Internal Server Error)

## Question Routes

### Get Question List
* **Url** :
  ```
  /questions
  ```
* **Method** :

  `GET`
* **Header** :

  `Content-Type: application/x-www-form-urlencoded:`

* **Body** : 
  * username: `String, required`
  * email: `String, required`
  * password: `String, required`

* **Response**
  * Success
    
    Code: 201 (Created)
    ```
    {
      _id: ObjectId,
      username: String,
      email: String,
      password: String, hashed password
    }
    ```
  * Failed
    
    Code: 400 (Bad Request)

    Code: 500 (Internal Server Error)