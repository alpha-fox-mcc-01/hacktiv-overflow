const jwt = require("jsonwebtoken");
const User = require('../models/user')

module.exports = 
    function (req, res, next) {

        console.log(req.headers,'====')
        const { token } = req.headers;
        if (token) {
            const authenticated = jwt.verify(token, process.env.SECRET);
            if (authenticated) {
                req.currentUserId = authenticated._id;
                // console.log(req.currentUserid, 'dari authenticated');
  
                User.findOne({ _id: authenticated })
                .then(data =>{
                    if(data){
                        // req.currentUserId = data._id
                        next();
                    }
                })
                .catch(err =>{
                    res.status(500).json(err)  
                })
            } else {
                res.status(400).json({
                    msg: `Access token invalid`
                })
            }
        } else {
            res.status(400).json({
                msg: `Access token not found`
            })
        }
    }