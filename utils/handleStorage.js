const multer = require('multer');

// Defino las variables de la función discStorage de Multer
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        const pathStorage = `${__dirname}/../storage`; //en qué carpeta se guardan los archivos
        cb(null, pathStorage) //null para los errores, pathStorage para el destination
    },
    filename:function(req,file,cb){
        const extension = file.originalname.split('.').pop() //tomo el ultimo valor del array que siempre va a ser la extensión
        const filename = `file-${Date.now()}.${extension}`;
        cb(null, filename) //devuelve nombre con el momento en que se cargó con fecha en formato UNIX
    }
})

const uploadMiddleware = multer({ storage: storage });

module.exports = uploadMiddleware