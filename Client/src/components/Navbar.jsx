import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-4">
          <Link className="font-semibold text-slate-900" to="/templates">
            TemplateProject
          </Link>
          <Link className="text-slate-500 hover:text-slate-900" to="/templates">
            Templates
          </Link>
          <Link className="text-slate-500 hover:text-slate-900" to="/favorites">
            Favorites
          </Link>
        </div>
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-slate-600">{user.name}</span>
            <button
              className="rounded bg-slate-900 px-3 py-1 text-white"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link className="text-slate-500 hover:text-slate-900" to="/login">
              Login
            </Link>
            <Link
              className="rounded border border-slate-300 px-3 py-1 text-slate-700 hover:border-slate-900"
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
