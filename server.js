const express=require('express')
const app=express()
const todoroute=require('./routes/todo');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/public',express.static(__dirname+'/public'))
app.use('/todos',todoroute);

app.listen(4545,()=>{
    console.log('server started on http://localhost:4545');
})