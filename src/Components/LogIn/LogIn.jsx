import { useState } from "react";
import "./logIn.css";
import { Form, useLoaderData, redirect, useActionData } from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);
    const response = redirect("/host");
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const message = useLoaderData();
  const [submitting, setSubmitting] = useState(false);
  const errorMessage = useActionData();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 className="red">{message}</h2>}
      {errorMessage && <h2 className="red">{errorMessage}</h2>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={submitting}>
          {submitting ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <h2>
        Don’t have an account?<a> Create one now</a>
      </h2>
    </div>
  );
}
