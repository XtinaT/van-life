import React from "react";
import { useLoaderData, Form, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../../api";

export const loader = ({ request }) => new URL(request.url).searchParams.get("message"); // or useSearchParams()

export async function action({ request }) {
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const redirectTo = new URL(request.url).searchParams.get("redirectTo")||"/host";
    try {
        await loginUser({ email, password });
        window.location.replace(redirectTo);
        // because redirect doesn't work
        // const data = await loginUser({ email, password });
    } catch (err) {
        return err;
    }
    return null;
}

export default function LoginForm() {
    const message = useLoaderData();
    const error = useActionData();
    const navigation = useNavigation();
    const { state } = navigation;

    // const [status, setStatus] = useState("idle");
    // const [error, setError] = useState(null);
    /* function handleSubmit(e) {
        e.preventDefault();
        setStatus("submitting");
        setError(null);
        loginUser(loginFormData)
            .then(() => {navigate("/host", { replace: true });})
            .catch(err=>{setError(err);})
            .finally(() => {
                setStatus("idle");
            });
    } */

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h2>{message}</h2>}
            {error && <h2>Error: {error.message}</h2>}
            <Form
                method="post"
                className="login-form" /* replace can be used to replace login page in history */
            >
                <input name="email" type="email" placeholder="Email address" />
                <input name="password" type="password" placeholder="Password" />
                <button disabled={state === "submitting"} type="submit">
                    {state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    );
}
