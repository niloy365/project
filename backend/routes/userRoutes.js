const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const router = express.Router();

//SignUp
router.post('/register', async (req,res) => {
    try{
        const { firstname, lastname, email, password} = req.body;
        const user = new User({firstname, lastname, email, password});
        await user.save();
        res.status(201).json({ message: 'User registered successfully'});
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});


//Login
router.post('/login', async (req,res) => {
 try {
    const { email, password} = req.body;
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(400).json({ error: 'Invalid Credentials'});
    }
    const token = jwt.sign({ id: user._id }, 'secret', {expiresIn: '1h'});
    res.json({ token });
 } catch (err) {
    res.status(400).json({ error: err.message });
 }
});

module.exports = router;