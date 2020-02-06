//6.Define all our API endpoints.


const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose')
const db = "mongodb+srv://rajatsgupta123:transformTicklu1990@cluster0-isgrf.mongodb.net/test?retryWrites=true&w=majority";



mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true }, err => {
    if (err) {
        console.error('Error! ' + err)
    } else {
        console.log('Connected to mongodb')
    }
});



//7.Handle get request.
router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData);
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else {
            res.status(200).send(registeredUser)
        }
    })

})

module.exports = router;






