import mongoose from 'mongoose'

const User = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    employment: {
        type: String,
        required: true
    }, 
    age: {
        type: Number,
        required: true
    }

});

export default mongoose.model('Users', User)