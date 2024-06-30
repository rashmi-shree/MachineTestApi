const {CreateEmployee} = require("../db/index")
const validateRequest = async(req, res, next)=>{
    const { name, email, mobileNo, designation, gender, course, image } = req.body;

    // Input validation
    if (!name || !email || !mobileNo || !designation || !gender || !course || !image) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if the mobile number is 10 digits
    if (!/^\d{10}$/.test(mobileNo)) {
        return res.status(400).json({ error: 'Mobile number must be 10 digits' });
    }

    //check if the email is duplicated
    try{
        const existingEmployee =  await CreateEmployee.findOne({email})
        if(existingEmployee){
            return res.status(400).json({error:"Email id already exists"})
        }
    }catch(error){
        console.error("Error checking for existing email", error);
        return res.status(500).json({error:'An error occurred while checking for existing email'})
    }

    // Check if the image is PNG or JPG
    const validImageExtensions = /\.(png|jpg)$/i; // Regular expression for PNG or JPG file extensions
    if (!validImageExtensions.test(image)) {
        return res.status(400).json({ error: 'Image must be in PNG or JPG format' });
    }

    next(); // Move to the next middleware or route handler
}

module.exports = validateRequest;