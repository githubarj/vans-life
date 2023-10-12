import "./logIn.css";
import {
  Form,
  useLoaderData,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { loginUser } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    await loginUser({ email, password });
    localStorage.setItem("isLoggedIn", true);
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
}

export default function Login() {
  const message = useLoaderData();
  const errorMessage = useActionData();
  const navigate = useNavigation();

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      {message && <h2 className="red">{message}</h2>}
      {errorMessage && <h2 className="red">{errorMessage}</h2>}
      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button disabled={navigate.state === "submitting"}>
          {navigate.state === "submitting" ? "Logging In" : "Log In"}
        </button>
      </Form>
      <h2>
        Don’t have an account?<a> Create one now</a>
      </h2>
    </div>
  );
}
