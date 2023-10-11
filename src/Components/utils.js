import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    const response = redirect("/logIn")
    response.body = true  
    return response
  }
  return null;
}
