//icons
import { FcGoogle } from "react-icons/fc";
//rrd
import { Form, Link, useActionData } from "react-router-dom";
//components
import { FormInput } from "../components";

//hooks
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};
function Login() {
  const userData = useActionData();
  const { signInWithEmail, isPending } = useLogin();
  useEffect(() => {
    if (userData) {
      signInWithEmail(userData.email,userData.password);
    }
  }, [userData]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen">
      <div className="auth-left"></div>
      <div className="auth-right">
      <Form
        method="post"
        className="w-96 p-6 border border-gray-500 rounded-lg"
      >
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
        <FormInput type="email" name="email" labelText="Email:" />
        <FormInput type="password" name="password" labelText="Password: " />
        <div className="mt-6">
          {!isPending && <button className="btn btn-secondary btn-block">Login</button>}
        </div>
        <div className="mt-6">
          {isPending && <button disabled className="btn btn-secondary btn-block">Loading...</button>}
        </div>
        <p className="text-center mt-2 decoration decoration-dashed text-lg">
          OR
        </p>
        <button
          type="button"
          className="btn btn-block mt-2"
        >
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>
        <p className="text-center mt-7">
          Don't have any account?{" "}
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </p>
      </Form>
      </div>
    </div>
  );
}

export default Login;
