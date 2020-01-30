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