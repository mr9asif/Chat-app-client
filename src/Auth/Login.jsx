import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='lg:max-w-7xl border mx-auto flex justify-center items-center gap-3 my-12'>
         
             <div className=''>
               <img src="https://i.postimg.cc/XqRQQfDs/3d-man-holding-mobile-sign-in-with-security-key-illustration-png.png" alt="" />
             </div>

             <div className='border w-[35%] px-6 rounded-sm p-4 shadow-md bg-gray-300'>
             <h1 className='text-center text-3xl font-bold'>Login</h1>
               <form action="">
                 <label htmlFor="">
                  <h2 className='text-xl font-semibold py-2'>Email</h2>
                   <input className='text-sm w-full font-semibold outline-none p-2' type="email" name='email' />
                 </label>
                 <label htmlFor="">
                    <h2 className='text-xl font-semibold py-2'>Password</h2>
                    <input className='text-sm w-full font-semibold outline-none p-2' type="password" name='password' />
                 </label>
                 <input className='block w-full p-2 hover:bg-orange-700 mt-2 cursor-pointer text-xl font-semibold bg-orange-500 text-white' type="submit" value='Login' name="" id="" />
               </form>
                <p className='text-xl font-semibold my-3'>Don't have an account? <Link to='/register' className='font-bold text-xl'>Register</Link></p>
             </div>
        </div>
    );
};

export default Login;