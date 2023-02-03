const jwt= require("jsonwebtoken");

exports.generateAccessToken= (model,secret)=> {
    return jwt.sign(model,secret)
}

exports.validateToken=(token,res,secret)=>{
    const accessToken= token;
    if(!accessToken) res.send("Access denied");
    jwt.verify(accessToken,secret,(err)=>{
        if (err) {
            res.send("Access denied, token expired or incorrect");
        }
        // else{
        //     //next();
        // }
    });
}

