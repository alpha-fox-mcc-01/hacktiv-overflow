# HACKTIFIRE OVERFLOW DOCUMENTATION #
---

## API DOCUMENTATION ##
---

### **List of QnA Routes** ###
| Route            |  HTTP  |   Headers    |                  Body                  | Params | Description                                |
| ---------------- | :----: | :----------: | :------------------------------------: | :----: | ------------------------------------------ |
| /qna/post        |  GET   |              |                  none                  |        | Get all posted question                    |
| /qna/post/:id    |  GET   |              |                  none                  |   id   | Create a single question by id             |
| /qna/post/:id    | DELETE | access_token |                                        |   id   | Get product detail by cat                  |
| /qna/post        |  POST  | access_token | title, category, body (content), image |        | Post a new question with pic               |
| /qna/post/wopic  |  POST  | access_token |    title, category, body (content)     |        | Post a new question without pic            |
| /qna/post/answer |  POST  | access_token |                 PostId                 |        | Add answer id to question answer array     |
| /qna/post/vote   |  POST  | access_token |                 UserId                 |        | Add other user id to question voters array |
---
<br>

### **List of User Routes** ###
| Route          | HTTP  | Header(s) | Body                                         | Params | Description                     |
| -------------- | :---: | :-------: | -------------------------------------------- | :----: | ------------------------------- |
| /user/login    | POST  |   none    | **Type: String (Req)**<<br>email<br>password |        | Sign up with new user info      |
| /user/register | POST  |   none    | **Type: String (Req)**<br>email<br>password  |        | Sign in and get an access token |
| /user/:id      |  GET  |           |                                              |   id   | Show a single user by ID        |

---
<br>

### **List of Answer Routes** ###
| Route           | HTTP  |  Header(s)   |      Body      | Params | Description                       |
| --------------- | :---: | :----------: | :------------: | :----: | --------------------------------- |
| /qna/answer     | POST  | access_token | body (content) |        | Add a new reply to a question     |
| /qna/answer     |  GET  |              |                |        | Get list of answers               |
| /qna/answer/:id |  GET  |              |                |   id   | Get list of answers of a question |
---

<br>
<br>

---
## CRON JOB ##
---
Delete all older question (posted more than 1 year ago) every 1 hour
