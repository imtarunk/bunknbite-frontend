import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../util/util";
import toast from "react-hot-toast";
import { LoginProp } from "@/types/types";

const AuthForm: React.FC<LoginProp> = ({ isLogin, setLogin }) => {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
  });
  const [isAdmin, setAdmin] = useState("user");
  const [isChecked, setIsChecked] = useState(false);

  const checkAdmin = () => {
    setIsChecked((prev) => !prev);
    setAdmin((prev) => (prev === "user" ? "vender" : "user"));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      try {
        const res = await axios.post(`${backendUrl}/${isAdmin}/register`, {
          phone: formData.phone,
          email: formData.email,
          password: formData.password,
        });
        toast.success(res.data.message);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        const res = await axios.post(
          `${backendUrl}/${isAdmin}/login`,
          {
            email: formData.email,
            password: formData.password,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        localStorage.setItem("authToken", res.data);
        if (res?.status === 200) {
          toast.success(res.data.message);
          setLogin(false);
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className={`p-8 rounded-2xl w-96 py-20 space-y-6 border border-gray-300  bg-white shadow-2xl transition-all duration-500 transform ease-in-out ${
        isSignup ? "translate-y-0 opacity-0" : "translate-y-0 "
      } slide-in-form bg-transparent fixed z-20`}
    >
      <IoMdClose
        className="absolute right-5 top-5 text-2xl text-gray-500 cursor-pointer hover:bg-gray-200 rounded-3xl"
        onClick={() => setLogin(!isLogin)}
      />

      <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">
        {isSignup ? "Sign Up" : "Log In"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {isSignup && (
          <div className="transition-opacity duration-300">
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your Phone"
              value={formData.phone}
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
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="adminCheckbox"
          checked={isChecked}
          onChange={checkAdmin}
          className="cursor-pointer w-5 h-5"
        />
        <label htmlFor="adminCheckbox" className="cursor-pointer">
          Set as Vendor Admin
        </label>
      </div>
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
  );
};

export default AuthForm;
