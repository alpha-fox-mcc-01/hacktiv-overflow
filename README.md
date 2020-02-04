# hacktiv-overflow


* **/////**

  
**Title**
----
registration


* **URL**

  /user/registrasi

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
    

**Title**
----
  login

* **URL**

  /user/login

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `none`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": {
            token: "2kb4khb24bgk4h2bkhf2bofhb2odbbsojnomdkvnofv",
            name: username
        } 
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
    

**Title**
----
  get all question

* **URL**

  /question/

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
         [
    {
        "_id": "5e3164614c25054221a91a00",
        "title": "apa yang",
        "desc": "apaa",
        "userId": "5e3130048cf4e871b5a2b136",
        "votes": [
            {
                "_id": "5e316bc30129f24ce88cd28d",
                "count": 1,
                "userId": "5e3130048cf4e871b5a2b136"
            }
        ],
        "createdAt": "2020-01-29T10:54:25.454Z",
        "updatedAt": "2020-01-29T11:26:07.007Z",
        "__v": 0
    }
]
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`



**Title**
----
  update a question

* **URL**

  /question/:id

  * **Method:**

  `put`
  
*  **URL Params**


   **Required:**
 
   `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { n: 1, nmodified: 1, ok: 1 }
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`


**Title**
----
  post question

* **URL**

  /question/

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
       {
    "_id": "5e3164614c25054221a91a00",
    "title": "apa yang",
    "desc": "apaa",
    "userId": "5e3130048cf4e871b5a2b136",
    "votes": [],
    "createdAt": "2020-01-29T10:54:25.454Z",
    "updatedAt": "2020-01-29T10:54:25.454Z",
    "__v": 0
}
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
    

**Title**
----
  delete question

* **URL**

  /question/:id

  * **Method:**

  `delete`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { n: 1, ndeleted: 1, ok: 1 }
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`


**Title**
----
  get answer from one question

* **URL**

  /answer/:id

  * **Method:**

  `get`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
         [
    {
        "_id": "5e3164614c25054221a91a00",
        "title": "apa yang",
        "desc": "apaa",
        "userId": "5e3130048cf4e871b5a2b136",
        "votes": [
            {
                "_id": "5e316bc30129f24ce88cd28d",
                "count": 1,
                "userId": "5e3130048cf4e871b5a2b136"
            }
        ],
        "createdAt": "2020-01-29T10:54:25.454Z",
        "updatedAt": "2020-01-29T11:26:07.007Z",
        "__v": 0
    }
]
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`



**Title**
----
  update a answer

* **URL**

  /answer/:id

  * **Method:**

  `put`
  
*  **URL Params**


   **Required:**
 
   `headers: access_token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
        "data": { n: 1, nmodified: 1, ok: 1 }
    }`
 
* **Code:** 400 user unautorizhed <br />
    **Content:** `{ 
       msg : unauthorized
        }`


**Title**
----
  post answer

* **URL**

  /answer/

* **Method:**

  `POST`
  
*  **URL Params**


   **Required:**
 
   `headers: token`

   **Optional:**
 
   `none`

* **Data Params**


* **Success Response:**
  

  * **Code:** 200 <br />
    **Content:** `{ 
       {
    "_id": "5e3164614c25054221a91a00",
    "title": "apa yang",
    "desc": "apaa",
    "userId": "5e3130048cf4e871b5a2b136",
    "votes": [],
    "createdAt": "2020-01-29T10:54:25.454Z",
    "updatedAt": "2020-01-29T10:54:25.454Z",
    "__v": 0
}
    }`
 
* **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
       msg : err.message 
        }`
    

=============

