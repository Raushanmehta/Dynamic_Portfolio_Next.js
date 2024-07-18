"use client"
import React, { useState } from 'react';

const ForgetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Add your API call logic here
    console.log("Password reset link sent to: ", email);
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md">
        <header className="text-2xl font-bold text-center">Forget Password</header>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="">
              <label htmlFor="email" className="block mb-1 text-sm font-medium
               text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none 
                focus:ring-2 focus:ring-indigo-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <button type="submit" className="w-full px-4 py-2 text-white
               bg-indigo-600 rounded-md hover:bg-indigo-500">
                Send Reset Link
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPasswordForm;
