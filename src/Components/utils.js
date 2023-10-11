import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    const response = redirect("/logIn?message=You must log in first.");
    response.body = true;
    return response;
  }
  return null;
}
