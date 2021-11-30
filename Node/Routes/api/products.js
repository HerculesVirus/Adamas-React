//Routes/api/products

const express = require('express')
const router = express.Router()
const multer = require("multer");
//const bodyParser = require('body-parser')
const path = require('path')
var fs = require('fs');
//Load Model 
const Product = require('../../models/Product')
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
//CreateProduct
router.post('/admin/createproduct', upload.any() ,
    async(req,res) => {
    console.log("Post  API is Hit /admin/createProduct")
    const newData = new Product();
    newData.Name = req.body.title
    newData.Description = req.body.desc
    newData.img = req.files[0].originalname
    newData.Featured= req.body.status
    newData.price = req.body.price
    newData.Category.name = req.body.Category
    newData.Category.id = req.body.Cat_ID
    await newData.save()
return res.json({message : "Yes"})
})

//Retrive Data from Mongo
router.get('/admin/listproduct' , (req,res) => {
    Product.find({})
    .then(data =>{
        res.json(data)
        //console.log(data)
      } 
    )
    .catch(err => console.log("Error from Get RES"+data))
  })
//Findone data from Mongo on ID
router.post('/admin/editproduct/:id' ,(req,res) => {
    console.log('Hit POST router /admin/editcategory/:id');
    console.log(req.body)
    Product.findOne({_id : Object.keys(req.body)})
    .then( data => {
      res.json(data)
      console.log(data)
    })
    .catch(err => console.log(err))
  })
module.exports = router;