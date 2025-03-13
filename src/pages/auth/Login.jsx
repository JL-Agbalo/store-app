import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Auth as Icons } from "../../components/icons/Icons";
import { SocialMedia } from "../../components/common";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your authentication logic here
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white text-black p-10">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-center mb-4">Sign In</h2>
          <p className="text-center text-gray-500 mb-8">Access your account</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Email</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-3">
                <Icons.Email className="text-gray-500 w-5 h-5 mr-2" />
                <input
                  type="email"
                  className="w-full focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="flex items-center border border-gray-300 rounded-lg p-3">
                <Icons.Password className="text-gray-500 w-5 h-5 mr-2" />
                <input
                  type="password"
                  className="w-full focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition duration-300 font-semibold mb-6"
            >
              Sign In
            </button>

            {/* Social Media Login */}
            <SocialMedia title={"Or sign in with"} />

            <p className="text-center text-gray-500 mt-6">
              Don't have an account?{" "}
              <Link to="/signup" className="text-black font-semibold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Side - Image with Text */}
      <div className="hidden md:flex w-1/2 items-center justify-center bg-black text-white p-10">
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4">Welcome to Our Store</h2>
          <p className="text-lg mb-6 text-gray-300">
            Experience the best shopping experience with us.
          </p>
          <img
            src="https://images.unsplash.com/photo-1601987077615-2d3cdbb1d1b1"
            alt="Shopping Experience"
            className="rounded-lg shadow-lg border-2 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
