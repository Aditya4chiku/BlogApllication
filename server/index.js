const express=require('express');
const cors=require('cors')
const bodyParser=require('body-parser');
require('../server/config/mongoose')
const userRoute=require('../server/routes/user.routes')
const blogRoute=require('../server/routes/blog.route')
const app=express()
app.use(cors())

app.use(bodyParser.json());
app.use('/api/user',userRoute);
app.use('/api/user',blogRoute);
app.listen(3000,()=>{
    console.log("Server is star")
})