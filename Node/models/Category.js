const mongoose = require('mongoose')

const categorySchema= new mongoose.Schema({    
    Name:{        
        type: String,        
        required:true,        
        lowercase: true,    
    },    
    Description:{        
        type: String,        
        required: true,    
    },    
    img:{   
        type: String       
    }})
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
