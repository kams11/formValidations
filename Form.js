import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import './Form.css'

const schema=yup.object().shape({
    firstname:yup.string().required(),
    lastname:yup.string().required(),
    email:yup.string().email().required(),
    age:yup.number().required("age is required").positive().integer(),
    password:yup.string().min(4).max(8).required(),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null]),
})

const Form = () => {
            const {register,handleSubmit,formState: { errors }}=useForm({
                resolver:yupResolver(schema),
            });
            
            const submitForm=(data)=> {
                console.log(data);
            }
          

  return (
    <>
        
    <div className='FormValid'>
        <div className="title"><h3>Sign Up</h3> </div>
        <div className="inputs">
            <form className='myform' onSubmit={handleSubmit(submitForm)}>
            <input type="text" name='firstname' placeholder='Firstname' {...register('firstname')} />
                 <br />
                {errors.firstname && <p>Please enter firstname.</p>}
                <input type="text" name='lastname' placeholder='last name' {...register('lastname')}  /><br />
                {errors.lastname && <p>Please enter lastname.</p>}
                <input type="email" name='email' placeholder='email id' {...register('email')}   /><br />
                {errors.email && <p>Please enter emailid.</p>}
                <input type="text" name="age" placeholder='age' {...register('age', { pattern: /\d+/ })} />
                 {errors.age && <p>Please enter number for age.</p>}
                 <br />
                <input type="password" name='password' placeholder='password' {...register('password')} /><br />
                {errors.password && <p>Please enter password.</p>}
                <input type="password" name='confirmpassword' placeholder='confirm password'{...register('confirmpassword')}  /><br />
                {errors.confirmpassword && <p>Password Mismatched.</p>}

                <input type="submit" id='submit'/>
            </form>
        </div>
    </div> 
    </>
  )
}

export default Form;


// <div className='FormValid'>
// <div className="title"><h3>Sign Up</h3> </div>
// <div className="inputs">
//     <form className='myform' onSubmit={handleSubmit(submitForm)}>
//         <input type="text" name='firstname' placeholder='first name' {...register('frstname')}/> <br />
            
//         <input type="text" name='lastname' placeholder='last name' {...register('lastname')}/><br />
//         <input type="text" name='email' placeholder='email id' {...register('email')} /><br />
//         <input type="number" name='age' placeholder='age' {...register('age',{valueAsNumber:true})} />
//         {/* {errors.age?.message && <p>{errors.age?.message}</p>} */}
//          <br />
//         <input type="password" name='password' placeholder='password'{...register('password')} /><br />
//         <input type="password" name='confirmpassword' placeholder='confirm password' /><br />

//         <input type="submit" id='submit'/>
//     </form>
// </div>
// </div> 