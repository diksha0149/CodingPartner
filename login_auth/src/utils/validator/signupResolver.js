import * as Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"



const signupSchema = Joi.object({
 


    email:Joi.string().email({
         minDomainSegments:2,
         tlds:{ allow:["com","net"]}
    }).error((errors)=>{
        errors.forEach(err =>{
            if(err.code === "string.empty"){
                err.message = "Email is required Field";
            }
            else if(err.code === "string.email"){
                err.message="Please enter a valid email";
            }
            
        });
        return errors;
    }),
    password:Joi.string().pattern(new RegExp("^[a-zA-Z0-9@#]{3,30}$")).error((errors)=>{
        errors.forEach(err =>{
            if(err.code === "string.empty"){
                err.message = "Password is required Field";
            }
            else if(err.code==="string.pattern.only"){
                err.message="Password must contain only characters,numbers and &#";
            }
           
        });
        return errors;
    }),
    repeatpassword:Joi.string().required().valid(Joi.ref("password")).error((errors)=>{
        errors.forEach(err =>{
            if(err.code === "string.empty"){
                err.message = "password is required Field";
            }
            else if(err.code==="any.only"){
                err.message="password and reenterpassword must be same";
            }
          
        });
        return errors;
    }),
});

export const signupResolver = joiResolver(signupSchema)
