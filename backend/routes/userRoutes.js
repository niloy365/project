const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { verifyToken, isAdmin } = require('../middleware/auth');
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
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {expiresIn: '1h'});
     res.json({
         token,
        user: { id: user._id, firstname: user.firstname, lastname: user.lastname, email: user.email, role: user.role}
     });
 } catch (err) {
    res.status(400).json({ error: err.message });
 }
});


//Current User
router.get('/me', verifyToken, async (req, res) => {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
});

//List Users (admin only)
router.get('/', verifyToken, isAdmin, async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
});

//Update a user's role (admin only)
router.patch('/:id/role', verifyToken, isAdmin, async (req, res) => {
    try {
        const { role } = req.body;
        if (!['user', 'admin'].includes(role)) {
            return res.status(400).json({ error: 'Invalid role' });
        }
        const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true }).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a user (admin only)
router.delete('/:id', verifyToken, isAdmin, async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted successfully' });
});

module.exports = router;