const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create menu Schema & model
const menuSchema = new Schema({
    menu:{
        label : String, 
        nivel: Integer, default: 0, 
        status : Integer, default: 0,
        icon : String, default: "",
        page : {
            nome: String, default: "",
            order: String, default: ""
        }
    },
    subMenu: {
        nome: String,
        default: ""
    },
    status:{
        type: String,
        default: "Pending"
    },
    applyDate:{
        type: Date,
        default: new Date()
    }                                                                                                                                          
});

const Menu = mongoose.model('menu', menuSchema);

module.exports = Menu;