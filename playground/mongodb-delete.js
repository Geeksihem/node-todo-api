//const MonCLient = require('mongodb').MongoClient; 
// identiique ::: 
const {MongoClient, ObjectID} = require('mongodb'); 
  
var obj = new ObjectID(); 
console.log(obj); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client )=> {
    const db = client.db('TodoApp'); 
    if(error){ 
     return console.log('unable to connect'); 
}

//delete many 

// deleteone 


// findone and delete 

//db.close(); 







}); 
