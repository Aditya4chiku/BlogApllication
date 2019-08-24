const express = require('express');
const UserSchema = require('../model/user.model');
const UserRoutes = express.Router();
UserRoutes.post('/register', (req, res) => {

    if (req.body.length <= 0) {
        res.send("Not Valid")
    }
    let user = new UserSchema({
        username:req.body.username,
        password:req.body.password
    })

    user.save().then(data => {
        res.send("Saved new user")
    }).catch((err) => {
        res.send(err);
    })



})




UserRoutes.post('/login',(req,res)=>{
    UserSchema.find(req.body).exec(async(err,userdoc)=>{
        if(err)
        {
            res.json(err)
            console.log(err)
        }
        else{
            let user=userdoc;
            if(user.length<=0)
            {
                res.statusCode=500;
                res.statusMessage="User Not Found"
                res.send("Not Found");
            }
            else{
                user[0].password=await null;
                res.json(user);
            }
        }
    })
})

module.exports = UserRoutes;

