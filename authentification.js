export default function Authentification(req,res,next){
    const fullToken = req.headers.authorization
    const [schem, token] =  fullToken && fullToken.split(' ')
    
    if(schem!="Bearer" || token!='1234'){
        return res.sendStatus(401);
    }
    
    };