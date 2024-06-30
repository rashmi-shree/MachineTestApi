const jwt = require('jsonwebtoken');
const { Response } = require('express');

const authentication = (req, res, next)=>{
    const authHeader = req.headers.authorization
    if (authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'titanic', (err, user)=>{
            if(err){
                return res.sendStatus(403)
            }
            req.user = user;
            next();

        })
    }else{
        res.sendStatus(401)
    }
}
module.exports = authentication;
