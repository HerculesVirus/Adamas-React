//Routes/api/categories

const express = require('express')
const router = express.Router()
var multer = require('multer')
const bodyParser = require('body-parser')
const path = require('path')

//Multer Config
//Store Image
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
//receive Single file
var upload = multer({ storage: storage }).single('file')
//server give Response
router.post('/upload',(req, res) => {  
    upload(req, res, 
        (err) => {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err)
            } else if (err) {
                return res.status(500).json(err)
            }
        return res.status(200).send(req.file)
        }
    )
});

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
            console.log(docs)
            res.end('data is find in mongo')
        }
        else{
            console.log(err)
        }
    })
  });
//Send Data to MonogoDB 
router.post('/admin/addcategory' , 
    async (req,res) => {
    console.log('Hit the post Router')
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.body.des)
    const newData = new MySchema();
    newData.Name = req.body.name
    newData.Description = req.body.des
    await newData.save()
return res.json({message:"yes"})
    }
)

module.exports = router;