const jwt=require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req,res,next) => {
 
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if(!token){
        return res.status(401).json({
            message:'acceso denegado no tenes token logeate'
        });
    }

    try{
        const decoded = jwt.verify(token,process.env.ACCES_JWT);
        const name = decoded.name;
        req.decoded =imagen
        req.userId = decoded.userId;
        req.isAdmin = decoded.isAdmin || false;
        next();
    }
    catch(error){
        console.error("error al verificar el token",error);
        res.status(500).json({message:'autorizacion invalida o expirada'});
    }
};

module.exports = {verifyToken};