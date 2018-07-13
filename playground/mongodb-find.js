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
console.log('connected to mngo ');  
//db.collection('Todos').find: true}).toArray().then((docs)=>{ 
 //console.log(JSON.stringify(docs, undefined, 2)); 

// db.collection('Todos').find().count().then((count)=>{ 
// console.log( `todos count  ${count}`); 
// }, (err)=>{
//     console.log('unable to fetch data', err); 
// })
db.collection('user').find({email:'hcinesihem@gmail.com'}).toArray().then(
 (docs)=>{ 
     console.log('ddddd'); 
console.log(JSON.stringify(docs, undefined, 2)); 

 }, (err)=>{
     console.log('unable to find collection '); 
 }
)

}); 
