//Routes/api/categories

const express = require('express')
const router = express.Router()
const multer = require("multer");
//const bodyParser = require('body-parser')
const path = require('path')
var fs = require('fs');
//Load Model 
const MySchema = require('../../models/Category')
//Multer Config
//Store Image
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
//receive Single file
const upload = multer({ storage: storage });

///////////////
//Custom Routes
// @ route GET api/categories/admin/addCategory
// @ description addCategory to MongoDB
// @ public Access
//Server send data to client side on get Routes
//Read Routes
router.get('/', (req, res) => {

    MySchema.find((err ,docs)=>{
        if(!err){
            //console.log(docs)
            res.end('data is find in mongo')
        }
        else{
            console.log(err)
        }
    })
  });
//Send Data to MonogoDB 
router.post('/admin/addcategory' , upload.any() , 
     async (req,res) => {
    // console.log('Hit the post Router')
    // console.log(req)
    // console.log(req.body.title)
    // console.log(req.body.desc)
    //  console.log(req.files[0].originalname)
    //  console.log("Monogo status: "+req.body.status)
    const newData = new MySchema();
    newData.Name = req.body.title;
    newData.Description = req.body.desc;
    newData.img = req.files[0].originalname;
    newData.status = req.body.status;
    await newData.save()
return res.json({message:"yes"})
})
//Retrive from Mongo
router.get('/admin/listcategory' , (req,res) => {
  //console.log('Hit get router /admin/listcategory');
  MySchema.find({})
  .then(data =>{
      res.json(data)
      console.log(data)
    } 
  )
  .catch(err => console.log("Error from Get RES"+data))
})

router.post('/admin/editcategory/:id' ,(req,res) => {
  //console.log('Hit POST router /admin/editcategory/:id');
  MySchema.findOne({_id : Object.keys(req.body)})
  .then( data => {res.json(data)
    //console.log(data)
  })
  .catch(err => console.log(err))
})
//update
router.put("/admin/savedata" ,upload.any(), (req,res)=> {
  console.log("PUT api is Hit")
  console.log(req.body)
  MySchema.findOneAndUpdate({_id : req.body.Myid },{
    Name : req.body.title,
    Description : req.body.desc ,
    img : req.files[0].originalname,
    status : req.body.status
  }
  )
  .then(data => res.json({messgae : "Data is updated"}))
  .catch(err => console.log(err))
})
//delete
router.delete("/admin/delete",(req,res)=> {
  console.log("DEL API hit")
  console.log(req.body.Uni)
  MySchema.findOneAndRemove(req.body.Uni , (err , data) => {
    if(!err){
      console.log(data)
    }
  })
  .then(data => res.json({messgae : "Data is Deleted"}))
  .catch(err => console.log(err))
})
//////////////////////Product/////////
router.post('/admin/createProduct' ,(res,req) => {
  console.log("Post  API is called")
  //res.end("Hello from the HIT API")
})
module.exports = router;