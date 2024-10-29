import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => console.log(data);

  return (
    <div className='lg:max-w-7xl  mx-auto flex justify-center items-center gap-3 my-12'>
      <div>
        <img src="https://i.postimg.cc/MHL3Q2Sf/man-holding-sign-up-form-3d-illustration-download-in-png-blend-fbx-gltf-file-formats-signin-login-u.png" alt="Register Illustration" />
      </div>

      <div className=' w-[35%] px-6 rounded-sm p-4 shadow-md bg-gray-400'>
        <h1 className='text-center text-3xl font-bold'>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <h2 className='text-xl font-semibold py-2'>Name</h2>
            <input
              className='text-sm w-full font-semibold outline-none p-2'
              type="text"
              {...register("name", {
                required: "Name is required",
                minLength: { value: 3, message: "Name must be at least 3 characters" }
              })}
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </label>

          <label>
            <h2 className='text-xl font-semibold py-2'>Email</h2>
            <input
              className='text-sm w-full font-semibold outline-none p-2'
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email address" }
              })}
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </label>

          <label>
            <h2 className='text-xl font-semibold py-2'>Password</h2>
            <input
              className='text-sm w-full text-white font-semibold outline-none p-2'
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </label>

          <input
            className='block w-full p-2 hover:bg-orange-700 mt-2 cursor-pointer text-xl font-semibold bg-orange-500 text-white'
            type="submit"
            value="Register"
          />
        </form>
        <p className='text-xl font-semibold my-3'>
          Already have an account? <Link to='/login' className='font-bold text-xl'>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
