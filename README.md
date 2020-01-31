# hacktiv-overflow
command: ssh -i "hacktiv-overflow.pem" ubuntu@ec2-3-15-21-239.us-east-2.compute.amazonaws.com

---

# REST API DOCUMENTATION
Root URL: http://localhost:3000



-------------------------------------------

**Create new user**


* **URL**

  users/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
{
    "username": String,
    "email": String,
    "password": String.
}
```

* **Header Params**

  None

* **Success Response Example:**

  * **Code:** 201 <br />
    **Content:**  
```javascript

    {  
        "_id": "asdmasdoimwad020j92dw"
        "username": "foobar",  
        "email": "foo@barmail.com"
    }  
 ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'POST',
        url : 'http://localhost:3000/users/signup',
        data: {
            username,
            email,
            password
        }
    });
  ```
-------------------------------------------

**Login as user**


* **URL**

  users/signin

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
{
    "email": String,
    "password": String.
}
```

* **Header Params**

  None

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript

    {  
      'access_token': 'asdoakd0w9dkw0d92jd02d9j'
    }  
 ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'POST',
        url : 'http://localhost:3000/users/signin',
        data: {
            email,
            password
        }
    });
  ```
-------------------------------------------

**Create new question**


* **URL**

  questions/

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
{
  "title": String,
  "description": String,
  "tags": Array
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 201 <br />
    **Content:**  
```javascript
{  
    "tags": [
      "Programming",
      "Javascript"
  ],
  "_id": "5e3142c30e20556d9e765f57",
  "title": "What bootcamp is best?",
  "description": "My engineering friends arent         helpful",
  "questionedBy": "5e3135173dca6a622c62bf8c",
  "votes": [
      {
          "_id": "5e323b007952441f0a310fcd",
          "user": "5e3135173dca6a622c62bf8c",
          "value": 1
      }
  ],
  "createdAt": "2020-01-29T08:30:59.828Z",
  "updatedAt": "2020-01-30T02:10:08.824Z",
  "__v": 0
}  
```
 
* **Error Response:**
  * **Code:** 401 UNAUTHORIZED<br />
    **Content:** `{ msg: "You are not authorized to perform that action" }`

  OR
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'POST',
        url : 'http://localhost:3000/products/',
        data: {
          title,
          description,
          tags
        }
    });
  ```

-------------------------------------------

**Get an existing question**


* **URL**

  questions/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
  id: [String]

* **Data Params**  
  None


* **Header Params**

  None
* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
  ```javascript
  {
      "tags": [
          "Programming",
          "Javascript"
      ],
      "_id": "5e3142c30e20556d9e765f57",
      "title": "What bootcamp is best?",
      "description": "My engineering friends arent helpful",
      "questionedBy": "5e3135173dca6a622c62bf8c",
      "votes": [
          {
              "_id": "5e3241beca375723246b9f64",
              "user": "5e3135173dca6a622c62bf8c",
              "value": 1
          }
      ],
      "createdAt": "2020-01-29T08:30:59.828Z",
      "updatedAt": "2020-01-30T03:28:51.837Z",
      "__v": 0
  }
  ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/products/asdsj0dj9sd2d',
    });
  ```
-------------------------------------------

**Get user's questions**


* **URL**

  /questions/me

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
  None

* **Data Params**  
  None


* **Header Params**

  access_token: [String]
* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
  ```javascript
  [
    {
      "tags": [
          "Programming",
          "Javascript"
      ],
      "_id": "5e3142c30e20556d9e765f57",
      "title": "What bootcamp is best?",
      "description": "My engineering friends arent helpful",
      "questionedBy": "5e3135173dca6a622c62bf8c",
      "votes": [
          {
              "_id": "5e3241beca375723246b9f64",
              "user": "5e3135173dca6a622c62bf8c",
              "value": 1
          }
      ],
      "createdAt": "2020-01-29T08:30:59.828Z",
      "updatedAt": "2020-01-30T03:28:51.837Z",
      "__v": 0
    }
  ]
  ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/products/asdsj0dj9sd2d',
    });
  ```

-------------------------------------------

**Get all questions**


* **URL**

  /questions

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
  None

* **Data Params**  
  None


* **Header Params**

  None
* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
  ```javascript
  [
    {
      "tags": [
          "Programming",
          "Javascript"
      ],
      "_id": "5e3142c30e20556d9e765f57",
      "title": "What bootcamp is best?",
      "description": "My engineering friends arent helpful",
      "questionedBy": "5e3135173dca6a622c62bf8c",
      "votes": [
          {
              "_id": "5e3241beca375723246b9f64",
              "user": "5e3135173dca6a622c62bf8c",
              "value": 1
          }
      ],
      "createdAt": "2020-01-29T08:30:59.828Z",
      "updatedAt": "2020-01-30T03:28:51.837Z",
      "__v": 0
    }
  ]
  ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/products/asdsj0dj9sd2d',
    });
  ```

-------------------------------------------

**Get all questions by tag**


* **URL**

  /questions/tags/:tag

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
  tag: [String]

* **Data Params**  
  None


* **Header Params**

  None
* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
  ```javascript
  [
    {
      "tags": [
          "Programming",
          "Javascript"
      ],
      "_id": "5e3142c30e20556d9e765f57",
      "title": "What bootcamp is best?",
      "description": "My engineering friends arent helpful",
      "questionedBy": "5e3135173dca6a622c62bf8c",
      "votes": [
          {
              "_id": "5e3241beca375723246b9f64",
              "user": "5e3135173dca6a622c62bf8c",
              "value": 1
          }
      ],
      "createdAt": "2020-01-29T08:30:59.828Z",
      "updatedAt": "2020-01-30T03:28:51.837Z",
      "__v": 0
    }
  ]
  ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/products/asdsj0dj9sd2d',
    });
  ```

-------------------------------------------

**Edit a question**


* **URL**

  products/:id

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

```javascript
{
  "title": String,
  "description": String
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript
{
    "tags": [
        "Programming",
        "Javascript"
    ],
    "_id": "5e3142c30e20556d9e765f57",
    "title": "What bootcamp is best?",
    "description": "My engineering friends arent helpful",
    "questionedBy": "5e3135173dca6a622c62bf8c",
    "votes": [
        {
            "_id": "5e3241beca375723246b9f64",
            "user": "5e3135173dca6a622c62bf8c",
            "value": 1
        }
    ],
    "createdAt": "2020-01-29T08:30:59.828Z",
    "updatedAt": "2020-01-30T03:28:51.837Z",
    "__v": 0
}
 ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'PUT',
        url : 'http://localhost:3000/questions/sodkawd9w0qdkqw9dksdjiqsd0d',
        headers: {
          access_token: 'asdasd90asd9ajwdj902d'
        },
        data: {
          title: 'Im confused about javascript',
          description: 'Vue js is tricky'
        }
    });
  ```

-------------------------------------------


**Delete a question**


* **URL**

  question/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**


* **Data Params**

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript

    {  
        "status": "Delete Successful"
    }  
 ```
 
* **Error Response:**
  * **Code:** 401 UNAUTHORIZED<br />
    **Content:** `{ msg: "You are not authorized to perform that action" }`

  OR
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'DELETE',
        url : 'http://localhost:3000/questions/asda0sdk3ada0dad',
        headers: {
            access_token: "sasda09dka0sdk9a0sd0wd3"
        }
    });
  ```

-------------------------------------------

**Voting a Question**


* **URL**

  questions/:id/vote

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   headers: access_token[String]
   

* **Data Params**

```javascript
{
  user: String,
  value: Number
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript
{
    "tags": [
        "Programming",
        "Javascript"
    ],
    "_id": "5e3142c30e20556d9e765f57",
    "title": "What bootcamp is best?",
    "description": "My engineering friends arent helpful",
    "questionedBy": "5e3135173dca6a622c62bf8c",
    "votes": [
        {
            "_id": "5e3241beca375723246b9f64",
            "user": "5e3135173dca6a622c62bf8c",
            "value": 1
        }
    ],
    "createdAt": "2020-01-29T08:30:59.828Z",
    "updatedAt": "2020-01-30T03:28:51.837Z",
    "__v": 0
}
 ```
 
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'POST',
        url : 'http://localhost:3000/questions/ijas0d9as9djsq0dq9d/vote',
        data: {
          user: 'asdawd-kw10kd-sdkaopdasd',
          value: 3
        }
    });
  ```

-------------------------------------------

**Create an Answer**


* **URL**

  answers/

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
   query: questionId[String]
   headers: access_token[String]

* **Data Params**
```javascript
{
  "title": String,
  "description": String,
  "tags": Array
}
```
* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 201 <br />
    **Content:**  
```javascript
{
    "_id": "5e31431e0e20556d9e765f59",
    "title": "Its up to you really",
    "description": "you forge your own path",
    "answeredBy": "5e3135173dca6a622c62bf8c",
    "question": "5e3142c30e20556d9e765f57",
    "votes": [],
    "createdAt": "2020-01-29T08:32:30.575Z",
    "updatedAt": "2020-01-29T08:32:30.575Z",
    "__v": 0
} 
 ```
 
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/questions/?questionId=asdiaodsikdaiodw0d09wa',
        data: {
          title: "Its up to you really",
          description: "you forge your own path",
        },
        headers: {
          access_token: 'asodkasdkapdkaspdq-0191wd109w0'
        }
    });
  ```

-------------------------------------------

**Edit an answer**


* **URL**

  answers/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
 
   id: [String]

* **Data Params**

```javascript
{
  "title": String,
  "description": String
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript
{
  "_id": "5e31431e0e20556d9e765f59",
  "title": "Its up to you really",
  "description": "you forge your own path",
  "answeredBy": "5e3135173dca6a622c62bf8c",
  "question": "5e3142c30e20556d9e765f57",
  "votes": [],
  "createdAt": "2020-01-29T08:32:30.575Z",
  "updatedAt": "2020-01-29T08:32:30.575Z",
  "__v": 0
}
 ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'PUT',
        url : 'http://localhost:3000/questions/sodkawd9w0qdkqw9dksdjiqsd0d',
        headers: {
          access_token: 'asdasd90asd9ajwdj902d'
        },
        data: {
          title: 'Hello There!',
          description: 'There many ways to see for yourself.'
        }
    });
  ```
-------------------------------------------

**Voting an Answer**


* **URL**

  answers/:id/vote

* **Method:**

  `PATCH`
  
*  **URL Params**

   **Required:**
 
   headers: access_token[String]
   

* **Data Params**

```javascript
{
  user: String,
  value: Number
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript
{
    "_id": "5e31431e0e20556d9e765f59",
    "title": "Its up to you really",
    "description": "you forge your own path",
    "answeredBy": "5e3135173dca6a622c62bf8c",
    "question": "5e3142c30e20556d9e765f57",
    "votes": [
      {
        user: "asodka0dsk0ad-wa0ad",
        value: -1
      }
    ],
    "createdAt": "2020-01-29T08:32:30.575Z",
    "updatedAt": "2020-01-29T08:32:30.575Z",
    "__v": 0
}
 ```
 
* **Error Response:**
  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'POST',
        url : 'http://localhost:3000/questions/ijas0d9as9djsq0dq9d/vote',
        data: {
          user: 'asodka0dsk0ad-wa0ad',
          value: -1
        }
    });
  ```
-------------------------------------------

**Get user's answers**


* **URL**

  /answers/me

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
  None

* **Data Params**  
  None


* **Header Params**

  access_token: [String]
* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
  ```javascript
  [
    {
      "_id": "5e31431e0e20556d9e765f59",
      "title": "Its up to you really",
      "description": "you forge your own path",
      "answeredBy": "5e3135173dca6a622c62bf8c",
      "question": "5e3142c30e20556d9e765f57",
      "votes": [],
      "createdAt": "2020-01-29T08:32:30.575Z",
      "updatedAt": "2020-01-29T08:32:30.575Z",
      "__v": 0
    }
  ]
  ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/products/asdsj0dj9sd2d',
    });
  ```

-------------------------------------------


**Get all answers for a question**


* **URL**

  answers/

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   query: questionId[String]

* **Data Params**

  None

* **Header Params**

  None

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript
[
    {
        "_id": "5e31431e0e20556d9e765f59",
        "title": "Its up to you really",
        "description": "you forge your own path",
        "answeredBy": {
            "_id": "5e3135173dca6a622c62bf8c",
            "username": "anthony123",
            "email": "anthony@mail.com",
            "password": "$2a$10$sS0k6hwnDKMsLiY5FxlI9uEikYPV/n7j.Jes0xLY8jSqII6NBgL/2",
            "createdAt": "2020-01-29T07:32:39.142Z",
            "updatedAt": "2020-01-29T07:32:39.142Z",
            "__v": 0
        },
        "question": {
            "tags": [
                "Programming",
                "Javascript"
            ],
            "_id": "5e3142c30e20556d9e765f57",
            "title": "What javascript framework is best",
            "description": "Im not sure about what to study",
            "questionedBy": "5e3135173dca6a622c62bf8c",
            "votes": [
                {
                    "_id": "5e3142f40e20556d9e765f58",
                    "user": "5e3135173dca6a622c62bf8c",
                    "value": -1
                }
            ],
            "createdAt": "2020-01-29T08:30:59.828Z",
            "updatedAt": "2020-01-29T08:31:48.193Z",
            "__v": 0
        },
        "votes": [],
        "createdAt": "2020-01-29T08:32:30.575Z",
        "updatedAt": "2020-01-29T08:32:30.575Z",
        "__v": 0
    }
]
 ```

 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ msg: "User is no longer valid" }`

  OR

  * **Code:** 403 FORBIDDEN <br />
    **Content:** `{ msg: "Login Required" }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/answers/?questionId=apsdokadpaskdkasdsakpdksadkpkokpo',
        headers: {
            access_token : token
        }
    });
  ```
-------------------------------------------