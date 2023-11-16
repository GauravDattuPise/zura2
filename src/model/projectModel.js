
const mongoose = require("mongoose");

// crating project schema

const projectSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    userId : {
            type: String    
    } 
},
)

module.exports = mongoose.model("project", projectSchema);