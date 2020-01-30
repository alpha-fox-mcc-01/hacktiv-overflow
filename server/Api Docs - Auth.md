
---
## 
**URL** : /auth/signup

**METHOD** : POST

**PARAMETERS** :
|Body|data type
|--|--|--|
|name|string
|email|string
|password|string

|Headers|data type
|--|--|--|
| none


**RESPONSE**:

Code: 201 (success)

Type: JSON :
```
{
  name: "...",
  email: "...",
}
```
---
---
## 
**URL** : /auth/signin

**METHOD** : POST

**PARAMETERS** :
|Body|data type
|--|--|--|
|email|string
|password|string

|Headers|data type
|--|--|--|
| none


**RESPONSE**:

Code: 200 (success)

Type: JSON :
```
{
  name: "...",
  email: "...",
  access_token: "..."
}
```
---