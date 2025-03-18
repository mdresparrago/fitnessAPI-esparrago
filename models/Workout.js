
const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    
    userId: {
        type: String,
        required:[true, 'User ID is Required']
    },
    name: {
        type: String,
        required: [true, 'Name is Required']
    },
    duration: {
        type: String,
        required: [true, 'Duration is Required']
    },
    dateAdded: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'Pending'
    }    

});


module.exports = mongoose.model('Workout', workoutSchema);