const express = require('express');
const {CreateEmployee} = require("../db")
const router = express.Router();
const authentication = require("../middlewares/authentication")
const multer = require('multer');
const path = require('path')
// require("./server/src/images")
// Multer configuration for storing uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads'); // Uploads will be stored in the 'uploads' directory
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + path.extname(file.originalname));
    },
  });

  const upload = multer({ storage: storage });
router.post('/createemployee',authentication, upload.single('image'), async (req, res)=>{
    console.log(req.body);
    console.log(req.file);
    try{
        const {name,email,mobileNo,designation,gender,course} = req.body   
        const image = req.file.filename;
        const newEmployee = new CreateEmployee({
            name,
            email,
            mobileNo,
            designation,
            gender,
            course,
            image,
        });

        await newEmployee.save()
        res.status(200).json({success:true})
    }catch(error){
        console.error("Error creating employee", error);
        res.status(500).json({error:'Failed to create a new employee'})
    }
})

router.get('/getemployees',authentication, async(req, res)=>{
    try{
        const employees = await CreateEmployee.find();
        res.status(200).json({success:true, employees})
    }catch(error){
        console.error("Error fetching employees",error);
        res.status(500).json({error:'Failed to fetch employees'});
    }
})
router.get('/getemployeebyid/:id', authentication,async(req, res)=>{
    try{
        const {id} = req.params;
        const employee =await CreateEmployee.findById({_id:id})
        res.status(200).json({success:true, employee})
    }catch(error){
        console.error("Error fetching employee",error);
        res.status(500).json({error:'Failed to fetch employee'});
    }
})

router.put("/updateemployee/:id", authentication,  async(req, res)=>{
    try{
        const {id} = req.params;
        const updatedData = req.body;
        const employee = await CreateEmployee.findOneAndUpdate({_id:id}, updatedData , { new: true })
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
          }
          res.json({success:true, employee});
    }catch(error){
        console.error("Error while updating the employee", error);
        res.status(500).json({error:'Failed to update the employee'})
    }
})
router.delete("/deleteemployee/:id",authentication, async(req, res)=>{
    try{
        const {id} = req.params;
        const deletedEmployee = await CreateEmployee.findByIdAndDelete({_id:id})
        if(!deletedEmployee){
            return res.status(404).json({error:'Employee not found'})
        }
        res.json({success:true, deletedEmployee})
    }catch(error){
        console.error("Error while deleting the employee", error)
        res.status(500).json({error:'Failed to delete the employee'})
    }
})
module.exports = router 