

var mongoose= require('mongoose'); 
var User =mongoose.model('user', { 
    email: { 
        type: String, 
        required : true, 
        minlength:5, 
        trim: true 
    }, 
    name : {
        type: String, 
        required : true
    }, 
    age : { 
        type: Number , 
        required: true
    } 
     }); 
     module.exports = { User } ; 
        
