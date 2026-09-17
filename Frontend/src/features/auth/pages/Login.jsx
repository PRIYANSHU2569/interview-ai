import React, { useState } from "react";
import { useNavigate, Link } from "react-router";
import "../auth.form.scss";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { loading, error, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await handleLogin({ email, password });
    if (success) navigate("/workspace");
  };

  return (
    <main className="auth-page auth-page--login">
      <div className="form-container login-card">
        <Link className="auth-brand" to="/">
          Interview<span>AI</span>
        </Link>
        <h1>Welcome back</h1>
        <p className="auth-subtitle">
          Log in to continue your interview preparation.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              autoComplete="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              value={password}
              autoComplete="current-password"
              required
            />
          </div>
          <button className="button primary-button" disabled={loading}>
            {loading ? "Logging in..." : "Log in"}
          </button>
        </form>
        {error && <p className="form-error" role="alert">{error}</p>}
        <p>
          Don't have an account? <Link to="/register">Get started</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
