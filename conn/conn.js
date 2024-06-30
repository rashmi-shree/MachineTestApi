const mongoose = require("mongoose");
// connect to mongoose
const conn = async(req, res)=>{
    try{
        await mongoose.connect('mongodb+srv://rashmi:Password123$$@cluster0.yabhtx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
             dbName: "MachineTestDB"
            })
        .then(()=>{
            console.log("connected");
        })
    }catch(error){  
        console.error("Error connecting to MongoDB:", error.message);
        throw error;
    }
}
conn()

module.exports = mongoose;