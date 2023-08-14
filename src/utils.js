import { redirect } from "react-router-dom";

export async function requireAuth(request) {
    const isLoggedIn = localStorage.getItem("loggedin");
    console.log(request.url);
    const path = new URL(request.url).pathname;
    if (!isLoggedIn) {
        window.location.replace(`/login?message=You must log in first&redirectTo=${path}`);// because redirect doesn't work
        return redirect(`/login?message=You must log in first&redirectTo=${path}`);
    } 
    return null;
}
