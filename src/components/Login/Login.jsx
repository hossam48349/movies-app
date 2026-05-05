import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  function isValidPassword(password) {
    return password.length >= 6;
  }
  const isFormValid =
    isValidEmail(form.email) && isValidPassword(form.password);
  function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) return;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      alert("No account found, please register first");
      return;
    }

    if (
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      alert("Login Successfully");
      navigate("/movies");
    } else {
      alert("Email or password is incorrect");
    }
  }
  return (
   <div className="login-container">
  <div className="overlay">
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2 className="auth-title">Welcome Back</h2>
      <p className="auth-subtitle">Unlimited movies, TV shows, and more.</p>

      <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <button disabled={!isFormValid} className="main-auth-btn">
        Sign In
      </button>

      <div className="form-footer">
        <div className="remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <span className="help-link">Need help?</span>
      </div>

      <div className="switch-auth">
        <span className="muted-text">New to MovieStream?</span>
        <button
          type="button"
          className="link-btn"
          onClick={() => navigate("/register")}
        >
          Sign up now
        </button>
      </div>
    </form>
  </div>
</div>
  );
}
export default Login;
