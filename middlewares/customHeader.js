const customHeader = (req,res,next) =>{
    try {
        const api_key = req.headers.api_key;
        if(api_key == "mabelis01"){
            next()
        }else{
            res.status(403)
            res.send({error: "Api_key incorrecta"})
        }
        
    } catch (error) {
        res.status(403)
        res.send({error: "Algo ocurrió en el custom header"})
    }
}

module.exports = customHeader