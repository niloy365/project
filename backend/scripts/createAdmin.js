require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/user');

const email = process.argv[2];
if (!email) {
    console.error('Usage: node scripts/createAdmin.js <email>');
    process.exit(1);
}

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase')
  .then(async () => {
    const user = await User.findOneAndUpdate({ email }, { role: 'admin' }, { new: true });
    if (!user) {
        console.error(`No user found with email ${email}. Register that account first, then rerun this script.`);
    } else {
        console.log(`${email} is now an admin.`);
    }
    mongoose.disconnect();
  });
