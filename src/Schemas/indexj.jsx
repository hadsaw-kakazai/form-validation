import * as Yup from 'yup';


export const signUpSchema = Yup.object({
    full_name:Yup.string().min(2).max(25).required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(6).required("Enter your password"),
    number:Yup.number().min(11).required("Enter your number")

});