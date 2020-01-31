# hacktiv-overflow

URL : **http://hacktiv-overflow.nafies.tech/**

Base API url : **http://api-hacktiv-overflow.nafies.tech/**

## Home
Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/` | GET | `none` | `200` OK | Show `Welcome to HacktivOverflow API` in a JSON format



## User :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/user/register` | POST | **Body**<br>name: `String`<br>email: `String`<br>password: `String` | **Success**<br>`201` Created<br>**Error**<br>`500` Internal Server Error | Create a user
`/user/login` | POST | **Body**<br>email: `String`<br>password: `String` | **Success**<br>`200` OK<br>**Error**<br>`400` Bad Request | Sign a user in
`/user/:id` | POST | `None` | **Success**<br>`200` OK<br>**Error**<br>`400` Bad Request | Get data a user



## Question :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/questions` | POST | **Headers**<br>token: `String`<br>**Body**<br>title: `String`<br>description: `String` | **Success**<br>`201` Created<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Create a question
`/questions` | GET | **Headers**<br>`None` | **Success**<br>`200` OK<br>**Error**<br>`400` Not Found <br>`500` Internal Server Error | Get all questions
`/questions/:id` | GET | **Headers**<br>token: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Get one question
`/questions/:id` | PUT | **Headers**<br>token: `String`<br>**Body**<br>title: `String`<br>content: `String`<br>file: `File` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Update a question
`/questions/:id` | DELETE | **Headers**<br>token: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Delete a question

## Answer :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/answers` | POST | **Headers**<br>token: `String`<br>**Body**<br>title: `String`<br>content: `String`<br>| **Success**<br>`201` Created<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Create a answer
`/answers` | GET | **Headers**<br>`None` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Get all answers
`/answers/:id` | GET | **Headers**<br>token: `String` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Get one answer
`/answers/:id` | PUT | **Headers**<br>token: `String`<br>**Body**<br>title: `String`<br>content: `String`<br>file: `File` | **Success**<br>`200` OK<br>**Error**<br>`401` Authorization Error<br>`500` Internal Server Error | Update a answer

### Undefined Route :

Route | Method | Request(s) | Response(s) | Description
---|---|---|---|---
`/*` | any | any | **Error**<br>`404` <br>Route not found | Show result if route not found