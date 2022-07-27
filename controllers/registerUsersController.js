const mongoose = require('mongoose');
const userSchema = require('../models/users');
const registerUsers = ((req, res, next) => {
    const user = new userSchema(req.body);
    if (user.userType === 'educator') {
        let domain = user.email.split('@')[1];
        let atpos = user.email.indexOf("@");
        if (user.email == null || user.email == "") {
            res.status(400).json("Please provide email");
        }                                           // First test checks for atleast one character before @
        else if (atpos < 1 || domain != "edyoda.com") { // Second test checks if the user entered a edyoda.com domain after @
            res.status(400).json("Not a valid e-mail address. Please write your email address like this: username@edyoda.com.");
        }
        else{
            user.save(err => {
                if (err) {
                    res.status(400).json({ message: err })
                } else {
                    const data={
                        userID:user._id,
                        email:user.email,
                        password:user.password,
                        firstName:user.firstName,
                        lastName:user.lastName,
                        contactNumber:user.contactNumber,
                        userType:user.userType
                    }
                    res.status(200).json({data})
                }
            })
        }
    }else{
        user.save(err => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                const data={
                    userID:user._id,
                    email:user.email,
                    password:user.password,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    contactNumber:user.contactNumber,
                    userType:user.userType
                }
                res.status(200).json({data})
            }
        })
    }
    
})


module.exports = { registerUsers };