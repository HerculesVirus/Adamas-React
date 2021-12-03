//Routes/api/Publicsite
const express = require('express')
const router = express.Router()
const multer = require("multer");
//const bodyParser = require('body-parser')
const path = require('path')
var fs = require('fs');
//Load Model 
const CategoryModel = require('../../models/Category')
const Product = require('../../models/Product')
//Multer Config
//Store Image
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/img/Product')
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
    Product.find((err,docs) =>{
        if(!err){
            //console.log(docs)
            res.end("data is find in Mongooose")
        }
        else{
            console.log(err)
        }
    })
});

router.get('/admin/publicsite/categries' , (req,res) => {
    CategoryModel.find({})
    .then( data => res.json(data))
    .catch(err => console.log(err))
})

router.get('/admin/publicsite/product' , (req,res) => {
    Product.find({})
    .then( data => res.json(data))
    .catch(err => console.log(err))
})

router.get(`/admin/publicsite/product/:id`, (req,res) => {
    console.log('Right API hit')
    const {id} =req.params
    console.log(id)
    Product.find({"Category.id" : id})
        .then(data => res.json(data))
        .catch(err => console.log(err))
    // return res.json({message : "Yes"})
    //Product.findById()
})

//Pagination API
router.get(`/admin/pagination` , async(req,res) => {
    const PAGE_SIZE = 3
    const page = parseInt(req.query.page || "0");
    const total = await Product.countDocuments({});
    const product = await Product.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page)
    .then( data => {
        res.json({totalPages: Math.ceil(total /PAGE_SIZE), data})
    })
    

})
module.exports = router ;