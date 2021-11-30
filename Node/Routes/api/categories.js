//Routes/api/categories
const express = require('express')
const router = express.Router()
const multer = require("multer");
//const bodyParser = require('body-parser')
const path = require('path')
var fs = require('fs');
//Load Model 
const CategoryModel = require('../../models/Category')
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
//Custom Routes
//HOME Routes
router.get('/', (req, res) => {
    CategoryModel.find((err ,docs)=>{
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
    const newData = new CategoryModel();
    newData.Name = req.body.title;
    newData.Description = req.body.desc;
    newData.img = req.files[0].originalname;
    newData.status = req.body.status;
    await newData.save()
return res.json({message:"yes"})
})
//Retrive Data from Mongo
router.get('/admin/listcategory' , (req,res) => {
  CategoryModel.find({})
  .then(data =>{
      res.json(data)
      //console.log(data)
    } 
  )
  .catch(err => console.log("Error from Get RES"+data))
})
//Findone data from Mongo on ID
router.post('/admin/editcategory/:id' ,(req,res) => {
  //console.log('Hit POST router /admin/editcategory/:id');
  CategoryModel.findOne({_id : Object.keys(req.body)})
  .then( data => {
    res.json(data)
    //console.log(data)
  })
  .catch(err => console.log(err))
})
//UPDATE Category
router.put("/admin/savedata" ,upload.any(), (req,res)=> {
  console.log("PUT api is Hit UPDATE Category")
  //console.log(req.body)
  CategoryModel.findOneAndUpdate({_id : req.body.Myid },{
    Name : req.body.title,
    Description : req.body.desc ,
    img : req.files[0].originalname,
    status : req.body.status
  }
  )
  .then(data => res.json({messgae : "Data is updated"}))
  .catch(err => console.log(err))
})
//DELETE Category
router.delete("/admin/delete",(req,res)=> {
  console.log("DEL API is hit DELETE Category")
  //console.log(req.body.Uni)
  CategoryModel.findOneAndRemove(req.body.Uni , (err , data) => {
    if(!err){
      console.log(data)
    }
  })
  .then(data => res.json({messgae : "Data is Deleted"}))
  .catch(err => console.log(err))
})

module.exports = router;