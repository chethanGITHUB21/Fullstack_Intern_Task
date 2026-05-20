import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { registerUser } from "../services/authService";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await registerUser({ name, email, password });
      login(result);
      navigate("/templates");
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Register</h1>
      <form
        className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        onSubmit={handleSubmit}
      >
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        ) : null}
        <label className="block">
          <span className="text-sm text-slate-700">Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-slate-900 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-slate-900 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm text-slate-700">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 focus:border-slate-900 focus:outline-none"
          />
        </label>
        <button
          className="w-full rounded-lg bg-slate-900 px-4 py-3 text-white hover:bg-slate-800"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create account"}
        </button>

        <p className="pt-2 text-center text-sm text-slate-600">
          Already have account?{" "}
          <Link className="font-medium text-slate-900 underline" to="/login">
            Login
          </Link>
        </p>
      </form>
    </main>
  );
}
