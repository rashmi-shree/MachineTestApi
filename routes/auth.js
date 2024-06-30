const jwt = require("jsonwebtoken");
const express = require('express');
const router = express.Router();
const secretKey = "titanic";
const bcrypt = require("bcrypt");
const {Admin} = require("../db");

// admin routes
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        console.log(admin);
        if (admin) {
            bcrypt.compare(password, admin.password, (err, result)=>{
                if(result){
                    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
                    res.json({ message: "Logged in successfully", username, token, status:1 });
                }else {
                    res.status(403).json({ message: 'Invalid password' , status:0});
                  }
            })
        } else {
            res.status(403).json({ message: 'Invalid username', status:0 });
        }
    } catch (error) {
        res.status(500).json({ message: 'An error occurred during login' , status:0});
    }
});

module.exports = router