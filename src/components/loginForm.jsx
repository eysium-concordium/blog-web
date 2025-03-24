import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({ email, password });
    }
  };

  return (
    <div className="w-72 p-6 text-center bg-[#2a2b38] rounded-lg shadow-lg">
      <h4 className="mb-4 text-2xl font-medium text-white">Log In!</h4>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="mt-2 flex items-center gap-2 bg-[#1f2029] rounded px-3 py-2">
          <input
            type="email"
            placeholder="Email"
            className="bg-transparent border-none outline-none w-full text-gray-300 placeholder-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Field */}
        <div className="mt-3 flex items-center gap-2 bg-[#1f2029] rounded px-3 py-2">
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent border-none outline-none w-full text-gray-300 placeholder-gray-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full rounded-md font-bold text-sm uppercase py-2 bg-[#ffeba7] text-[#5e6681] shadow-lg transition-all duration-300 hover:bg-[#5e6681] hover:text-[#ffeba7]"
        >
          Login
        </button>

        {/* Navigate to Registration */}
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="mt-2 block text-sm text-gray-300 hover:text-[#ffeba7] transition"
        >
          New Registration
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
