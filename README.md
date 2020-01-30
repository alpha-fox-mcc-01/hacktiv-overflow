# HacktivOverflow
A platform to ask and answer questions

# User Routes
| Route | HTTP | Request | Response | Description|
| ----------- | ----------- |----------- |----------- | ----------- |
| /users/register | POST |email, username, password|201(Created), 500(Internal Server Error)|Register|
| /users/login | POST |username,  password|200(Created), 500(Internal Server Error)|Login|

# Question Routes
| Route | HTTP | Request | Response | Description|
| ----------- | ----------- |----------- |----------- | ----------- |
| /questions/post | POST |title, question|201(Created),500(Internal Server Error) |Post A Question
| /questions/ | GET |none|200(OK), 500(Internal Server Error)|Get All Questions
| /questions/:id| GET |none|200(OK),500(Internal Server Error) |Get One Question
| /questions/:id| DELETE |id|200(OK),500(Internal Server Error) |Delete A Question
| /questions/:id| PUT |id, title, question |201(OK),500(Internal Server Error) |Edit A Question