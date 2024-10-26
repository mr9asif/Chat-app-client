import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='lg:max-w-7xl border mx-auto flex justify-center items-center gap-3 my-12'>
         
        <div className=''>
          <img className='' src="https://i.postimg.cc/MHL3Q2Sf/man-holding-sign-up-form-3d-illustration-download-in-png-blend-fbx-gltf-file-formats-signin-login-u.png" alt="" />
        </div>

        <div className='border w-[35%] px-6 rounded-sm p-4 shadow-md bg-gray-300'>
        <h1 className='text-center text-3xl font-bold'>Register</h1>
          <form action="">
          <label htmlFor="">
          <h2 className='text-xl font-semibold py-2'>Name</h2>
           <input className='text-sm w-full font-semibold outline-none p-2' type="text" name='name' />
         </label>

            <label htmlFor="">
             <h2 className='text-xl font-semibold py-2'>Email</h2>
              <input className='text-sm w-full font-semibold outline-none p-2' type="email" name='email' />
            </label>
            <label htmlFor="">
               <h2 className='text-xl font-semibold py-2'>Password</h2>
               <input className='text-sm w-full font-semibold outline-none p-2' type="password" name='password' />
            </label>
            <input className='block w-full p-2 hover:bg-orange-700 mt-2 cursor-pointer text-xl font-semibold bg-orange-500 text-white' type="submit" value='Register' name="" id="" />
          </form>
           <p className='text-xl font-semibold my-3'>Already have an account? <Link to='/login' className='font-bold text-xl'>Login</Link></p>
        </div>
   </div>
    );
};

export default Register;