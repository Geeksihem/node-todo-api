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

 db.collection('User').findOneAndUpdate({_id: new ObjectID('5b4602f4a8face1bdfa7604b')}, {
     $set: { 
       name: 'mocha'  
     }, 
     $inc :  {
         age: 1
     }
 }, { 
     returnOriginal : false 
 }).then((res)=> { 
     console.log('ddd', res ); 
 }); 

  //db.close();

}); 
