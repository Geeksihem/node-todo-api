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
// db.collection('Todos').deleteMany({
// text:'sihem'
// }).then( (res)=>{
//     console.log(res); 
// }, (err)=> { 
//     console.log(err); 
// })
// deleteone 

// db.collection('Todos').deleteOne({text:'mike'}).then((result) => {
//     console.log('it ok i hve deleted ')
// }).catch((err) => {
//     console.log('problem', err); 
// })
// ; 

// findone and delete 

 //db.close();

}); 
