import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "./Userprofile";

function Login({ toggleLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    try {
      setLoading(true);
      // Simulating a delay for demonstration purposes
      setTimeout(() => {
        navigate(`/home`);
        setLoading(false);
      }, 3000);
    } catch (err) {
      console.error(err);
      setError("Failed to log in. Please try again later.");

      setTimeout(() => {
        setError("");
      }, 2000);
      setLoading(false);
    }
  }

  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="inline-block animate-spin rounded-full border-4 border-solid border-current border-e-transparent h-8 w-8">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!loading && error && (
        <div
          role="alert"
          className="absolute top-0 left-0 w-full bg-red-500 text-white text-center py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div>{error}</div>
        </div>
      )}
      <form onSubmit={login}>
        <div className="relative left-0 top-44  w-full flex flex-col items-center z-10">
          <div className="aspect-square w-32 h-36">
            <UserProfile name={name} />
          </div>
          <div className="mt-2 font-bold text-xl">
            <h1>Rahul Bhandari</h1>
          </div>

          {!loading && (
            <>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="input pl-2 py-2  bg-opacity-30 w-72 max-w-xs focus:outline-none border-[0.5px] rounded-sm border-b-white mt-4 placeholder-white opacity-100::placeholder"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                autoComplete="current-password"
              />
            </>
          )}
        </div>
      </form>
      <div className="absolute flex gap-9 text-white bottom-5 right-12 select-none">
        <span className="material-symbols-outlined text-3xl">wifi</span>
        <span className="material-symbols-outlined text-3xl">
          accessibility
        </span>
        <span className="material-symbols-outlined text-3xl">
          power_settings_new
        </span>
      </div>
    </>
  );
}

export default Login;
