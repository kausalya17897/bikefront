import React from 'react'
import {useFormik} from 'formik';
import * as yup from 'yup';

const validateForm=(values)=>{
    const errors={};
    console.log("validateForm",values);
      //min 8 chars
      if(values.password.length<8){
        errors.password="Please provide longer password";
    }
    if(values.password.length>12){
        errors.password="Please provide a shorter password";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    console.log(errors);
    return errors;
};
const formValidationSchema=yup.object({
    email:yup
    .string()
    .min(5,"Need a big email")
    .required("Fill email")
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
    password:yup
    .string()
    .min(5,"Need a big password")
    .max(12,"too much")
    .required("Fill password"),

    });
function Login(){

    const {handleChange,values,handleSubmit,handleBlur,errors,touched}=useFormik({
initialValues:{username:"xxx",email:"xxx@gmail.com",password:"abc"},
//validate:validateForm,
//only when no error 
validationSchema:formValidationSchema,
onSubmit:(values)=>{
    console.log("onSubmit",values);

  
}
})
    return(
<div >
    <h1>Signup</h1>
    <div className='login'>
    <form onSubmit={handleSubmit}>
       <div>
          
          <p>
               <label>Username</label>
           </p>
        <p>
               <input  
               id='username'
               name="username"
               value={values.username}
               onChange={handleChange}
               onBlur={handleBlur}
               type="text" 
               placeholder='username'/>
          </p>
          <p>
               <label>Email:</label>
               </p>
               <p>
               <input 
                id='email'
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email"
                placeholder="Enter your email"/>
          </p>
          <p>
               <label>Password</label>
               </p>
               <p>
               <input
                id='password'
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password" 
                placeholder='Enter your password'/>
          </p>
          {/*//only when input is toched show error*/}
          {errors.password &&
           touched.password &&
           errors.password}
          <button type="submit">Submit</button>
          
          <a href=""><p>Click here to login</p></a>
        </div> 
    </form>
    </div>
</div>
    )
}
export default  Login