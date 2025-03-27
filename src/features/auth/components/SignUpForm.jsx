import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialMedia } from "../../../components/common";
import { AUTH_ROUTES } from "../../layout/constants/routes";

function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-3">
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all duration-200 hover:border-gray-400"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Last name"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xs font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Create a password"
          />
          {errors.password && (
            <p className="text-red-500 text-xs mt-1">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2.5 rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-[1.02] font-semibold text-sm shadow-md hover:shadow-xl mb-4"
        >
          Create Account
        </button>

        <SocialMedia title={"Or continue with"} />

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <Link
            to={AUTH_ROUTES.SIGNIN}
            className="text-black font-semibold hover:underline transition-all"
          >
            Sign In
          </Link>
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;
