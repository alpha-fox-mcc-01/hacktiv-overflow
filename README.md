# hacktiv-overflow

**REGISTER USER**
----
  

* **URL**

  /users/register

* **Method:**
  
  <_The request type_>

`POST` 
  

* **Data Params**

  username: String
  email: String
  password: String

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message:  'Registration Successful!'}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**
 axios.post('users/register', {
     username: '',
     password: '',
     email: ''
 })

**LOGIN USER**
----


* **URL**

  /users/login

* **Method:**
  
  `POST` 
  
* **Data Params**

  email : String
  password: String

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Login successful!'}`
 
* **Error Response:**


  * **Code:** 400  <br />
    **Content:** `{ error : "Email/password wrong" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.post('users/login', {
      data: {
           password: '',
            email: ''
      }
  })


**POST QUESTION**
----
  


* **URL**

  /questions

* **Method:**
  
  `POST` 
  
* **Data Params**

  title: 'String'
  category: 'String'
  content: 'String'

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: 'Question successfully posted!'}`
 
* **Error Response:**


  * **Code:** 401  <br />
    **Content:** `{ error : "You are not authenticated, please login" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.post('questions', {
      data: {
        title: '',
        content: ''
      }
  })


**GET ALL QUESTION**
----
  


* **URL**

  /questions

* **Method:**
  
  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ result: [ {
        _id: 
        title:
        content:
        author: 
    }]}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.get('/questions')


**GET MY QUESTION**
----
  


* **URL**

  /questions/me

* **Method:**
  
  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ result: [ {
        _id: 
        title:
        content:
        author: 
    }]}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.get('/questions/me')


**DELETE QUESTION**
----
  


* **URL**

  /questions/:id

* **URL Params**
  :id = question ID(ObjectID )
* **Method:**
  
  `DELETE` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Delete successful'}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.delete('/questions/:id')

  

**POST ANSWER**
----
  


* **URL**

  /answers

* **Method:**
  
  `POST` 
  
* **Data Params**

  title: 'String'
  category: 'String'
  content: 'String'

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{ message: 'Answer successfully posted!'}`
 
* **Error Response:**


  * **Code:** 401  <br />
    **Content:** `{ error : "You are not authenticated, please login" }`

  OR

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.post('answers', {
      data: {
        title: '',
        content: ''
      }
  })


**GET ALL ANSWERS**
----
  


* **URL**

  /answers

* **Method:**
  
  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ result: [ {
        _id: 
        title:
        content:
        author: 
    }]}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.get('/answers')


**GET MY ANSWER**
----
  


* **URL**

  /answers/me

* **Method:**
  
  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ result: [ {
        _id: 
        title:
        content:
        author: 
    }]}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.get('/answers/me')


**DELETE ANSWER**
----
  


* **URL**

  /answers/:id

* **URL Params**
  :id = question ID(ObjectID )
* **Method:**
  
  `DELETE` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ message: 'Delete successful'}`
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.delete('/answers/:id')




**SEARCH QUESTION BY CATEGORY/TITLE**
----
  


* **URL**

  /search/:keyword

* **URL Params**
  :keyword = String
* **Method:**
  
  `GET` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ result: [ {
        _id: 
        title:
        content:
        author: 
    }]}`
 
 
* **Error Response:**

  * **Code:** 500 <br />
    **Content:** `{ error : "Internal Server Error" }`

* **Sample Call:**

  axios.get('/search/:keyword')

