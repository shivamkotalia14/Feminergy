const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true,'Please enter username']
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        } 
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User',userSchema);
module.exports = User;