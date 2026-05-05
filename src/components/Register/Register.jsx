import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const isFormValid =
    form.name.trim() &&
    form.email.includes("@") &&
    form.username.trim() &&
    !form.username.includes(" ") &&
    form.password.length >= 6 &&
    form.password === form.confirmPassword;

  function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) return;

    const userData = {
      name: form.name,
      email: form.email,
      username: form.username,
      password: form.password,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registered Successfully");

    navigate("/");
  }

  return (
<div className={styles.page}>

<form className={styles.registerCard} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Register</h2>

        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button   className={`${styles.registerBtn}`}

        disabled={!isFormValid}>
          Register
        </button>

       <button
  type="button"
    className={`${styles.loginBtn}`}
  onClick={() => navigate("/")}
>
  Login
</button>
      </form>
    </div>
  );
}

export default Register;