const express = require('express');
const blogRoute = express.Router();
const blogSchema = require('../model/blog')

blogRoute.post('/blogcreate', (req, res) => {

    if (req.body.length <= 0) {
        res.send("Err");
    }

    let blog = new blogSchema({
        title: req.body.title,
        description: req.body.description
    })
    blog.save().then((data, err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Suuces new Blog save");
        }

    }).catch((err) => {
        if (err)
            res.send(err);
    })



})


blogRoute.get('/showblog',(req,res)=>{

    let len=req.body.length;
    if(len<=0)
    {
        res.send("Err")
    }
    
    blogSchema.find({}).exec((err,blog)=>{
      if(err)
        {
            res.send(err)
        }
        else{

            let  blogdata=blog;
            if(blogdata.length<=0)
            {
                res.statusCode=500;
                res.statusMessage="Data empty"
                res.send("No data found");
            }
            else{
                res.send(blog)
            }
        }
    })
  
})

// blogRoute.put('/blogcreate/:id',(req,res)=>{
//     blogSchema.findByIdAndUpdate({_id:req.params.id},{
//        title:req.body.name,
//        decription:req.body.description  
//     },(err,docs)=>{
//         if(err)
//         {
//             res.send(err)
//         }
//         else{
//             res.send("Update success")
//         }
//     })
// })


// blogRoute.post('/update/:id',(req,res)=>{
//     blogSchema.findById(req.params.id,(err,blog)=>{
//         if(!blog)
//         res.send(404).send("Record not found")
//         else{
//             blog.title=req.body.title;
//             blog.description=req.body.description;
//             blog.save().then(blog=>{
//                 res.json('update complte')
//             }).catch(err=>{
//                 res.send(400).send("unable for update the record")
//             })
//         }
//     })
// })

blogRoute.put('/videos/:id', function(req, res, next){
    blogSchema.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, 
            description:req.body.description}
    },
    {
        new: true
    },
    function(err, blog){
        if(err){
            res.send("Error updating blog");
        }else{
            res.json(blog);
        }
    }
    )
})












blogRoute.get('/delete/:id',(req, res) =>{
    blogSchema.findByIdAndRemove({_id: req.params.id},(err,blog)=>{
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});















// blogRoute.delete('/delete/:id',(req,res)=>{
//   blogSchema.findByIdAndDelete({_id:req.params.id},(err,doc)=>{
//       if(err)
//       res.send(err)
//       else
//       {
//            res.send("delete success")
//       }
//   })
// })


module.exports = blogRoute;