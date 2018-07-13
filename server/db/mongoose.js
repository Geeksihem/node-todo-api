var mongoose = require('mongoose'); 

mongoose.Promise= global.Promise; 
// normal sans test mongoose.connect('mongodb://localhost:27017/TodoApp'); 
mongoose.connect(process.env.MONGODB_URI); 
module.exports= {mongoose};  
