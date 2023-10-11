import { useState } from "react";
import "./logIn.css";
import { useLoaderData } from "react-router-dom";

export function loader({ request }) {
  console.log(new URL(request.url).searchParams.get("message"));
  return new URL(request.url).searchParams.get("message");

}

export default function Login() {
  const message = useLoaderData();
  console.log(message);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 className="red">{message}</h2>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
        />
        <button>Log in</button>
      </form>
      <h2>
        Don’t have an account?<a> Create one now</a>
      </h2>
    </div>
  );
}
