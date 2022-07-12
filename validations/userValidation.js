const {user}=require('./schema');


exports.addUserValidation=async(req,res,next)=>{
        const value= await user.validate(req.body);
        if(value.error){
            res.statusCode=400;
            res.json({
                success:0,
                message:value.error.details[0].message
        });
        }
        else{
            next();
        }
    }
