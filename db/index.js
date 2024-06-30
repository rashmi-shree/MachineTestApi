const mongoose = require("mongoose");
const saltRounds = 10;
const bcrypt = require("bcrypt");

// define mongoose schemas
const adminSchema = new mongoose.Schema({
    username:String,
    password:String,
})

const createEmployeeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true, // Assuming each employee should have a unique email address
        validate: {
            validator: function(v) {
                // Regular expression for validating email addresses
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    mobileNo: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                // Regular expression for a 10-digit mobile number
                return /^[0-9]{10}$/.test(v);
            },
            message: props => `${props.value} is not a valid 10-digit mobile number!`
        }
    },
    designation:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    course:{
        type:String,
        required:true,
    },
    image: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})
// define mongoose model
const Admin = mongoose.model('admin', adminSchema)
const CreateEmployee = mongoose.model('createEmployee', createEmployeeSchema)

const createAdmin = async() =>{
    const hashedPassword = await bcrypt.hash("titanic",saltRounds);
    const newAdmin = new Admin({
        username:"zhaozhi",
        password:hashedPassword
    })
    await newAdmin.save();
}
// createAdmin()
// Immediately invoke createAdmin() once
(async () => {
    await createAdmin();
})();

module.exports = {
    Admin,
    CreateEmployee
}