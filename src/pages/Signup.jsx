import React from "react";
import Icons from "../components/icons/AuthIcons";

function Signup() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left - Text Content */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-black text-white p-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Welcome to Our Store</h2>
          <p className="text-lg mb-6 text-gray-300">
            Experience the best shopping experience with us. Discover a wide
            range of products and enjoy seamless shopping.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Right - Signup Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white text-black p-10">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-center mb-4">
            Create Account
          </h2>
          <p className="text-center text-gray-500 mb-8">
            Join us for the best shopping experience
          </p>
          <form>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Create a password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300 font-semibold mb-6"
            >
              Sign Up
            </button>

            {/* Social Media Signup */}
            <div className="mt-8">
              <p className="text-center text-gray-500 mb-4">Or sign up with</p>
              <div className="flex justify-center gap-4">
                <button className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                  <Icons.Google className="w-5 h-5" /> Google
                </button>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                  <Icons.Facebook className="w-5 h-5" /> Facebook
                </button>
                <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition">
                  <Icons.Github className="w-5 h-5" /> GitHub
                </button>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-6">
              Already have an account?{" "}
              <a href="/login" className="text-black font-semibold">
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
