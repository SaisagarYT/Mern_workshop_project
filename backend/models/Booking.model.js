const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    packageId:{
        type:String,
        required:true,
    },
    numberOfPeople:{
        type:Number,
        required:true,
    },
    totalPrice:{
        type:String,
        required:true,
    },
    paymentStatus:{
        type:String,
        required:true,
        enum:['paid','pending','canceled']
    },
    specialRequest:{
        type:String,
        required:true,
    }
},{timestamps:true});
module.exports = mongoose.model('Booking',bookingSchema);
