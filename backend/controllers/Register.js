const Register = async(req,res) =>{
    try {
        const {fullName,email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message: "Invalid Data",
                success:false
            })
        }
        const isUserExists = await user.findOne({email})
        if(isUserExists){
            return res.status(401).json({
                message: "Email Already Exists",
                success: false,
            })
        }

        await user.create({
            fullName,
            email,
            password
        })
        
        return res.status(200).json({

        })
        

    } catch (error) {
      console.log(error)  
    } 
}

export default Register;