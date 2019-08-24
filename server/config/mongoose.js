const mongoose=require('mongoose')

const url = 'mongodb://localhost:27017/blog'
mongoose.connect(url,(err,db)=>{

    assert.equal(null, err);
    console.log("Connected correctly to server");
  
    db.close();
})