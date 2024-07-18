import React from 'react';
import Link from 'next/link';

const SignUpForm = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-md shadow-md">
        <header className="text-2xl font-bold text-center">Sign Up</header>

        <form action="prisma">
          <div className="space-y-4">
            <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium
             text-gray-700">Email</label>
              <input
                type="email"
                id='email'
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none 
                focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div >
            <label htmlFor="password" className="block mb-1 text-sm font-medium
             text-gray-700">Password</label>
              <input
                type="password"
                id='password'
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none 
                focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div >
            <label htmlFor="conform-password" className="block mb-1 text-sm font-medium
             text-gray-700">Conform Password</label>
              <input
                type="password"
                id='conform-password'
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none
                 focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <div className="text-right">
              <Link href="forget-password" className="text-sm text-indigo-600 
              hover:underline">
                Forget password
              </Link>
            </div>

            <div>
              <button  className="w-full px-4 py-2 text-white bg-indigo-600 
              rounded-md hover:bg-indigo-500">
                Sign Up
              </button>
            </div>
          </div>
        </form>

        <div className="text-center">
          <span>
            Create a new account?{' '}
            <Link href="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>

          </span>
        </div>

        <div className="flex items-center justify-center mt-4 space-x-2">
          <span className="block w-1/5 border-b"></span>
          <span className="text-xs text-gray-400 uppercase">or login with</span>
          <span className="block w-1/5 border-b"></span>
        </div>

        <div className="space-y-2">
          <Link
            href="#"
            className="flex items-center justify-center w-full px-4 py-2 space-x-2 
            text-sm border rounded-md hover:bg-gray-100"
          >
            <i className="bx bxl-facebook text-xl"></i>
            <span>Login with Facebook</span>
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center w-full px-4 py-2 space-x-2 
            text-sm border rounded-md hover:bg-gray-100"
          >
            <img src="assets/google.png" alt="Google" className="w-5 h-5" />
            <span>Login with Google</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
