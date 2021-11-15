const route=require('express').Router();

let todos=[]

route.get('/',function(req,res){
    res.send(todos)
})

route.post('/',function(req,res){
      todos.push(
          req.body.task 
      )   //we are pushing object here

      res.send((todos))
})

module.exports=route