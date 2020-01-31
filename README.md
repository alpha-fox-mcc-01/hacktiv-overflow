# hacktiv-overflow

**Register User**
----
  Returns json data about a single user (_id, name, email).

* **URL**

  /user/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**
  **Content:** `{ name : "Michael Bloom", email: "michael@bloom.com", password: "12345678" }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ _id : 5e255fbf3ba93441da825e5d, name : "Michael Bloom" , email: michael@bloom.com}`
 
* **Error Response:**

  * **Code:** 400 MONGO ERROR <br />
    **Content:** `{ errors : [ "Email is already used" ] }`

  OR

  * **Code:** 400 VALIDATION ERROR <br />
    **Content:** `{ errors : [ "..." , "..." ] }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`

* **Sample Call:**

  ```javascript
  axios({
    method: 'POST',
    url: 'http://localhost:3000/user/register',
    data: {
      name,
      email,
      password,
    },
  });
  ```


**Login User**
----
  Returns json data {access_token}.

* **URL**

  /user/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  **Required:**
  **Content:** `{ email: "michael@bloom.com", password: "12345678" }`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ access_token, name }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "..." , "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'POST',
    url: 'http://localhost:3000/user/login',
    data: {
      email,
      password,
    },
  });
  ```


**Fetch All Questions**
----
  Returns all questions data.

* **URL**

  /question

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    [
      {
        "_id": "5e3167a199f82678697a4abe",
        "title": "Helo",
        "content": "kenapa?",
        "authorId": "5e3159d04066847673acb4ca",
        "votes": [],
        "createdAt": "2020-01-29T11:08:17.841Z",
        "updatedAt": "2020-01-29T11:08:17.841Z",
        "__v": 0
    },
    {
        "_id": "5e3167ac99f82678697a4abf",
        "title": "test",
        "content": "test",
        "authorId": "5e3159d04066847673acb4ca",
        "votes": [
            {
                "_id": "5e316da2e7faa978c4223aef",
                "vote": 1
            }
        ],
        "createdAt": "2020-01-29T11:08:28.464Z",
        "updatedAt": "2020-01-29T11:34:01.452Z",
        "__v": 0
    }
    ]
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'GET',
    url: 'http://localhost:3000/question'
  });
  ```


**Fetch One Question**
----
  Returns one question data.

* **URL**

  /question/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
   **Content:** `Question's id { "id": "5e3167ac99f82678697a4abf" }`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```javascript
    {
      "_id": "5e3167ac99f82678697a4abf",
      "title": "test",
      "content": "test",
      "authorId": "5e3159d04066847673acb4ca",
      "votes": [
          {
              "_id": "5e316da2e7faa978c4223aef",
              "vote": 1
          }
      ],
      "createdAt": "2020-01-29T11:08:28.464Z",
      "updatedAt": "2020-01-29T11:34:01.452Z",
      "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'GET',
    url: `http://localhost:3000/question/${id}`
  });
  ```


**Add Question**
----
  Add and returns one question data.

* **URL**

  /question

* **Method:**

  `POST`
  
* **URL Params**

  None

* **Data Params**

  `{ title: "...", content: "..." }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```javascript
    {
      "_id": "5e31a6c075e0f77cb1640115",
      "title": "Nice",
      "content": "Cool",
      "authorId": "5e3159d04066847673acb4ca",
      "votes": [],
      "createdAt": "2020-01-29T15:37:36.145Z",
      "updatedAt": "2020-01-29T15:37:36.145Z",
      "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "...", "..." ] }`

    OR

  * **Code:** 401 UNAUTHORIZED ERROR <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 401 JsonWebTokenError <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'POST',
    url: `http://localhost:3000/question`,
    data: {
      title: 'hello',
      content: 'kenapa kok hello?'
    },
    headers: {
      access_token
    }
  });
  ```


  **Edit Question**
----
  Edit and returns one question data before updated.

* **URL**

  /question/:id

* **Method:**

  `PUT`
  
* **URL Params**

  **Required:**
  **Content:** `Question's id { "id": "5e3167ac99f82678697a4abf" }`

* **Data Params**

  `{ title: "...", content: "..." }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```javascript
    {
      "_id": "5e31a6c075e0f77cb1640115",
      "title": "Nice",
      "content": "Cool",
      "authorId": "5e3159d04066847673acb4ca",
      "votes": [],
      "createdAt": "2020-01-29T15:37:36.145Z",
      "updatedAt": "2020-01-29T15:37:36.145Z",
      "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "...", "..." ] }`

    OR

  * **Code:** 401 UNAUTHORIZED ERROR <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 401 JsonWebTokenError <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'PUT',
    url: `http://localhost:3000/question/${id}`,
    data: {
      title: 'hello',
      content: 'kenapa bisa hello?'
    },
    headers: {
      access_token
    }
  });
  ```


  **Delete Question**
----
  Delete and returns one question data before deleted.

* **URL**

  /question/:id

* **Method:**

  `DELETE`
  
* **URL Params**

  **Required:**
  **Content:** `Question's id { "id": "5e3167ac99f82678697a4abf" }`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```javascript
    {
      "_id": "5e31a6c075e0f77cb1640115",
      "title": "Nice",
      "content": "Cool",
      "authorId": "5e3159d04066847673acb4ca",
      "votes": [],
      "createdAt": "2020-01-29T15:37:36.145Z",
      "updatedAt": "2020-01-29T15:37:36.145Z",
      "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "...", "..." ] }`

    OR

  * **Code:** 401 UNAUTHORIZED ERROR <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 401 JsonWebTokenError <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/question/${id}`,
    headers: {
      access_token
    }
  });
  ```


  **Vote Question**
----
  Push vote to question's votes field.

* **URL**

  /question/:id

* **Method:**

  `PATCH`
  
* **URL Params**

  **Required:**
  **Content:** `Question's id { "id": "5e3167ac99f82678697a4abf" }`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```javascript
    {
      "n": 1,
      "nModified": 1,
      "ok": 1
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "...", "..." ] }`

    OR

  * **Code:** 401 UNAUTHORIZED ERROR <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 401 JsonWebTokenError <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'PATCH',
    url: `http://localhost:3000/question/${id}`,
    data: {
      vote: 1
    },
    headers: {
      access_token
    }
  });
  ```


**Add Answer**
----
  Add and returns one answer data.

* **URL**

  /answer

* **Method:**

  `POST`
  
* **URL Params**

  **Required:**
  **Content:** `Question's id { "id": "5e3167ac99f82678697a4abf" }`

* **Data Params**

  `{ title: "...", content: "..." }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```javascript
    {
      "_id": "5e31a6c075e0f77cb1640115",
      "title": "Nice",
      "content": "Cool",
      "authorId": "5e3159d04066847673acb4ca",
      "questionId": "5e31a6c075e0f77cb1640115",
      "votes": [],
      "createdAt": "2020-01-29T15:37:36.145Z",
      "updatedAt": "2020-01-29T15:37:36.145Z",
      "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "...", "..." ] }`

    OR

  * **Code:** 401 UNAUTHORIZED ERROR <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 401 JsonWebTokenError <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'POST',
    url: `http://localhost:3000/answer`,
    data: {
      title: 'hello',
      content: 'kenapa kok hello?',
      questionId
    },
    headers: {
      access_token
    }
  });
  ```


    **Edit Answer**
----
  Edit and returns one answer data before updated.

* **URL**

  /answer/:id

* **Method:**

  `PUT`
  
* **URL Params**

  **Required:**
  **Content:** `Answer's id { "id": "5e3167ac99f82678697a4abf" }`

* **Data Params**

  `{ title: "...", content: "..." }`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:**
    ```javascript
    {
      "_id": "5e31a6c075e0f77cb1640115",
      "title": "Nice",
      "content": "Cool",
      "authorId": "5e3159d04066847673acb4ca",
      "questionId": "5e31a6c075e0f77cb1640115",
      "votes": [],
      "createdAt": "2020-01-29T15:37:36.145Z",
      "updatedAt": "2020-01-29T15:37:36.145Z",
      "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "...", "..." ] }`

    OR

  * **Code:** 401 UNAUTHORIZED ERROR <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 401 JsonWebTokenError <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'PUT',
    url: `http://localhost:3000/answer/${id}`,
    data: {
      title: 'hello',
      content: 'kenapa bisa hello?'
    },
    headers: {
      access_token
    }
  });
  ```


  **Delete Answer**
----
  Delete and returns one answer data before deleted.

* **URL**

  /answer/:id

* **Method:**

  `DELETE`
  
* **URL Params**

  **Required:**
  **Content:** `Answer's id { "id": "5e3167ac99f82678697a4abf" }`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:**
    ```javascript
    {
      "_id": "5e31a6c075e0f77cb1640115",
      "title": "Nice",
      "content": "Cool",
      "authorId": "5e3159d04066847673acb4ca",
      "questionId": "5e31a6c075e0f77cb1640115",
      "votes": [],
      "createdAt": "2020-01-29T15:37:36.145Z",
      "updatedAt": "2020-01-29T15:37:36.145Z",
      "__v": 0
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ errors : [ "...", "..." ] }`

    OR

  * **Code:** 401 UNAUTHORIZED ERROR <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 401 JsonWebTokenError <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ errors : [ "..." ] }`

    OR

  * **Code:** 500 <br />
    **Content:** `{ errors : [ "Internal Server Error" ] }`


* **Sample Call:**

  ```javascript
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/answer/${id}`,
    headers: {
      access_token
    }
  });
  ```