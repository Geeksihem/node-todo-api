// env 
var env = process.env.NODE_ENV || 'development'; 
console.log('env =****** ', env); 
if(env === 'development'){ 
process.env.PORT = 3000; 
process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp'; 
 }else if( env ==='test'){ 
  process.env.PORT = 3000; 
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'; 

 }; 

const  express = require('express');
const  bodyParser = require('body-parser');
const   {ObjectId}= require('mongodb'); 
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const _= require('lodash'); 
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});
app.get('/todos', (req, res)=>{
Todo.find().then((todos)=>{
    res.send({todos}); 
}, 
(e)=>{
    res.status(400).send(e); 
}); 
}); 
// get .xtoodo/id : 123  
app.get('/todos/:id', (req, res)=>{ 
  var id = req.params.id ; 
  
  if( !ObjectId.isValid(id))
  { 
    return res.status(404).send(); 
  }; 

  Todo.findById(id).then((todo)=>{
    if(!todo){ 
      return res.status(404).send(); 
    } 
    res.send({todo}); 
   }).catch((e)=>{ 
    res.status(400).send(); 
  })
})

//route
app.delete('/todos/:id', (req,res)=>{ 
var id = req.params.id ; 
if(!ObjectId.isValid(id)){ 
 return  res.status(404).send(); 
}
Todo.findByIdAndRemove(id).then((doc)=>{
if(!doc){ 
  return res.status(404).send(); 
}
   res.send(doc); 
  
}, (err)=>{
  res.status(400).send(); 
}); 
}) ; 
// patch when update 
app.patch('/totos/:id', (req, res)=>{ 
  var id = req.params.id ; 
  var body = _.pick(req.body, ['text', 'completed']);
  if(!ObjectId.isValid(id)){ 
    return res.status(404).send(); 
  } 

  if(_.isBoolean(body.completed) && body.completed)
  {
    body.completedAt = new Date().getTime(); 
  }
  else{ 
    body.completed= false; 
    body.completedAt= null ; 
    
  }
  Todo.findByIdAndUpdate(id, {$set: body}, { new : true}).then((todo)=>{
if(!todo){
  return res.status(404).send(); 
}
res.send({todo}); 
  }).catch((e)=>{
    res.status(400).send(); 

  })
}); 



app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports= {
    app
}; 