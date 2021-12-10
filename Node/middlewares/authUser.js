const jwt = require('jsonwebtoken')

const requireAuth = (req,res,next)=> {
    console.log(req.cookies)
    const token = req.cookies.access_token;
    console.log(token)
    //check web token exist & is verified
    if(token){
        jwt.verify(token ,`Ticket secret key` , (err , decodedToken)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log(decodedToken)
                res.json(decodedToken)
                next()
            }
        })
    }
    else{
        console.log('token is not verified')
        res.json({'message': 'token not exist'})
    }
}

module.exports = { requireAuth } ;