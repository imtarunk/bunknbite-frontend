import React, { useState } from "react";
import auth from "../assets/authPage.jpg";

export default function AuthForm() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignup ? "Signup Data:" : "Login Data:", formData);
    alert(`${isSignup ? "Signup" : "Login"} Successful!`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-200 to-gray-100 relative overflow-hidden">
      <img
        src={auth}
        alt=""
        className="max-w-full h-auto object-cover absolute inset-0 opacity-90"
      />
      <div
        className={`p-8 rounded-2xl w-96 py-20 space-y-6 border border-gray-300 absolute bg-white shadow-2xl transition-all duration-500 transform ease-in-out ${
          isSignup ? "translate-y-0 opacity-100" : "translate-y-0 opacity-100"
        } slide-in-form`}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
          {isSignup ? "Sign Up" : "Log In"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignup && (
            <div className="transition-opacity duration-300">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 transition-transform duration-300 focus:scale-105"
                required
              />
            </div>
          )}
          <div className="transition-opacity duration-300">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 transition-transform duration-300 focus:scale-105"
              required
            />
          </div>
          <div className="transition-opacity duration-300">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-3 transition-transform duration-300 focus:scale-105"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-md shadow-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 pulse-button"
          >
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-indigo-600 hover:underline transition-colors duration-200 hover:text-indigo-700"
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}
