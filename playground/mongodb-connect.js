//const MonCLient = require('mongodb').MongoClient; 
// identiique ::: 
const {MongoClient, ObjectID} = require('mongodb'); 
  
var obj = new ObjectID(); 
console.log(obj); 

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client )=> {

if(error){ 
     return console.log('unable to connect'); 
}
console.log('connected to mngo '); 
const db = client.db('TodoApp'); 
// db.collection('Todos').insertOne({
//     text: 'something to do', 
//     completed: false 

// }, (err, res)=>{
//     if (err)
//     { return console.log('unable to insert todeo , ', err ); }
//     console.log(JSON.stringify(res.ops, undefined, 2)); 
// }); 

//insert new Usrs(name, age, location) 
// db.collection('Users').insertOne({
//     name: 'sihem', 
//     age: 25, 
//     location : 'bengo'
// }, (err, res)=> { 
//     if(err){
//         return console.log('unable '); 
//     }
//     console.log('dddddddd', res.ops[0]._id.getTimestamp()
//  ); 
// }); 
 
client.close(); 
}); 
