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
  NONE


* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript

    {  
        "name": "Miyako Rice Cooker",  
        "description": "High Quality and Affordable",
        "category": "Appliance",  
        "stocks": 12,  
        "price": 750000,
        "featured_image": "http://aaoskdw.images.com"
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
        method: 'PUT',
        url : 'http://localhost:3000/products/asdsj0dj9sd2d',
        data: {
            name,
            description,
            category,
            stocks,
            price,
            featured_image
        }
    });
  ```

-------------------------------------------

**Obtain a product**


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
    "name": String,
    "description": String,
    "category": String,
    "stocks": Number,
    "price": Number
    "featured_image": String
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript

    {  
        "name": "Miyako Rice Cooker",  
        "category": "Appliance",  
        "stocks": 12,  
        "price": 700000 
    }  
 ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'GET',
        url : 'http://localhost:3000/products/asda0sdk3ada0dad',
    });
  ```

-------------------------------------------


**Delete a product**


* **URL**

  products/:id

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
        url : 'http://localhost:3000/products/asda0sdk3ada0dad',
        headers: {
            access_token: "sasda9d0aj90wd3"
        }
    });
  ```

-------------------------------------------

**Adding product to cart**


* **URL**

  users/cart

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   headers: access_token[String]
   

* **Data Params**

```javascript
{
  productId: String,
  quantity: Number
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 201 <br />
    **Content:**  
```javascript
    {  
        "_id": "sadaodkwd2d2dj"
        "username": "johndoe",  
        "email": "johndoe@gmail.com",  
        "isAdmin": false,  
        "cart": [  
            "asdk20wd29wdsj0aas",  
            "asdasdisadsdma0aas",  
        ]  
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
        url : 'http://localhost:3000/users/cart',
        data: {
          productId: 'o8y7t7tuyg7t6r4eyg',
          quantity: 7
        }
    });
  ```

-------------------------------------------

**Remove item from cart**


* **URL**

  users/cart

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
   headers: access_token[String]

* **Data Params**
  productId[String]

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript

    {  
      "status": "Delete Success"
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
        method: 'DELETE',
        url : 'http://localhost:3000/products/cart',
        data: {
          productId: 'sf343fe31dsqdqdw2dsad6'
        },
        headers: {
          access_token: localStorage.getItem('access_token')
        }
    });
  ```

-------------------------------------------

**Checkout A User**


* **URL**

  users/checkout

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
 
    access_token: [string]

* **Data Params**

```javascript
{
    "name": String,
    "description": String,
    "category": String,
    "stocks": Number,
    "price": Number
    "featured_image": String
}
```

* **Header Params**

  access_token: [string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript

    {  
      "status": "checkout successful"
    }  
 ```
 
* **Error Response:**
  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ msg: "Internal Server Error" }`
* **Sample Call:**

  ```javascript
    axios({
        method: 'DELETE',
        url : 'http://localhost:3000/users/checkout',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
    });
  ```

-------------------------------------------


**Obtain user's cart info)**


* **URL**

  users/cart

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  None

* **Header Params**

  access_token=[string]

* **Success Response Example:**

  * **Code:** 200 <br />
    **Content:**  
```javascript

    [  
        {  
            "productId": "asdk20wd29wdsj0aas",  
            "quantity": 5,  
            "subtotal": 250000
        },
        {  
            "productId": "asdasdisadsdma0aas",  
            "quantity": 2,  
            "subtotal": 150000
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
        url : 'http://localhost:3000/users/cart',
        headers: {
            access_token : token
        }
    });
  ```
-------------------------------------------