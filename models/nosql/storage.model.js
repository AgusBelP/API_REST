const mongoose = require('mongoose');

const StorageSchema = new mongoose.Schema(
    {
        url:{
            type: String
        },
        filename:{
            type: String
        }
    },
    {
        timestamps:true,   //registra createdAt y updatedAt
        versionKey:false
    }
)

module.exports = mongoose.model("storage", StorageSchema)