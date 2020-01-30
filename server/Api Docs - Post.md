## FETCH CURRENT USER'S POST
**URL** : /post/mine

**METHOD** : get

**PARAMETERS** :
|Body|data type
|--|--|--|
|none

|Headers|data type
|--|--|--|
|access_token|string


**RESPONSE**:

Code: 200 (success)

Type: JSON :
```
[
  {
    "_id": "...,
    "Title": "...",
    "content": "...",
    "language: ["...","..."],
    "votes": [],
    "createdAt: "...",
    "updatedAt: "...",
    "isResolved: "...",
  },
  {
    "_id": "...,
    "Title": "...",
    "content": "...",
    "language: ["...","..."],
    "votes": [],
    "createdAt: "...",
    "updatedAt: "...",
    "isResolved: "...",
  },
]
```
---
---
## FETCH ALL POST
**URL** : /post

**METHOD** : get

**PARAMETERS** :
|Body|data type
|--|--|--|
|none

|Headers|data type
|--|--|--|
| none


**RESPONSE**:

Code: 200 (success)

Type: JSON :
```
[
  {
    "_id": "...,
    "Title": "...",
    "content": "...",
    "language: ["...","..."],
    "votes": [],
    "createdAt: "...",
    "updatedAt: "...",
    "isResolved: "...",
  },
  {
    "_id": "...,
    "Title": "...",
    "content": "...",
    "language: ["...","..."],
    "votes": [],
    "createdAt: "...",
    "updatedAt: "...",
    "isResolved: "...",
  },
]
```
---
---
## FETCH ONE POST
**URL** : /post/:postId

**METHOD** : get

**PARAMETERS** :
|Body|data type
|--|--|--|
| none

|Headers|data type
|--|--|--|
| none


**RESPONSE**:

Code: 200 (success)

Type: JSON :
```
{
  "_id": "...,
  "Title": "...",
  "content": "...",
  "language: ["...","..."],
  "votes": [],
  "createdAt: "...",
  "updatedAt: "...",
  "isResolved: "...",
}
```
---
---
## NEW POST
**URL** : /post/newpost

**METHOD** : POST

**PARAMETERS** :
|Body|data type
|--|--|--|
|title|string
|content|string
|language|string

|Headers|data type
|--|--|--|
|access_token|string


**RESPONSE**:

Code: 201 (success)

Type: JSON :
```
{
  "_id": "...,
  "Title": "...",
  "content": "...",
  "language: ["...","..."],
  "votes": [],
  "createdAt: "...",
  "updatedAt: "...",
  "isResolved: "...",
}
```
---
---
## EDIT POST
**URL** : /post/edit

**METHOD** : POST

**PARAMETERS** :
|Body|data type
|--|--|--|
|postId|string
|title|string
|content|string
|language|string

|Headers|data type
|--|--|--|
|access_token|string


**RESPONSE**:

Code: 200 (success)

Type: JSON :
```
{
  "_id": "...,
  "Title": "...",
  "content": "...",
  "language: ["...","..."],
  "votes": [],
  "createdAt: "...",
  "updatedAt: "...",
  "isResolved: "...",
}
```
---