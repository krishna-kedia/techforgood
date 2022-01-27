const mongoose = require('mongoose')
const validator = require('validator');
const receiptSchema = new mongoose.Schema({
    remarks:{
        type: String,
        required: true
    },
    amount:{
        type:Number,
        required:[true, 'Please fill amount'],
    },
    // courseEnrolled:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Course"
    // },
    createdAt: { type: Date, default: Date.now },

})
mongoose.model('Receipt',receiptSchema)