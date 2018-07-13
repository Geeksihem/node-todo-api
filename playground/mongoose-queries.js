
const {ObjectId} = require('mongodb'); 
const {User} = require('./../server/models/user'); 
const {mongoose} = require('./../server/db/mongoose'); 
const {Todo} = require('./../server/models/todo'); 
  var id = '5b475e863856e36f3cc0c6b7'; 
  if(! ObjectId.isValid(id)) 
 {
      console.log('id not valid '); 
 }
 else
 { 
     console.log('it s okkk'); 
 }

// without new okjbectId 
 

// Todo.findOne({
//     _id: id 
// }).then((todo)=>{
//     console.log('TOdo', todo )
// })
Todo.findById(id).then((ok)=>{
    console.log(ok); 

}) 