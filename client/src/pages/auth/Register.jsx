import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authService } from "../services/authServices.js";

export default function Register() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(formData);
      setMessage("✅ Registration successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage("❌ Registration failed. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-md border border-gray-300 transition-all duration-300">
        <form onSubmit={handleSubmit}>
          <h2 className="text-4xl font-extrabold mb-8 text-center text-blue-700 drop-shadow">
            Sign-up
          </h2>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-4 py-3 rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition duration-200 shadow"
          >
            Register
          </button>
          <p className="text-center text-sm text-gray-600 mt-6">{message}</p>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 underline hover:text-blue-800 font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
// This code defines a Register component for user registration in a React application.