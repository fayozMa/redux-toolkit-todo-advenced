//icons
import { FcGoogle } from "react-icons/fc";

import { useEffect, useState } from "react";
//components
import { Form, useActionData, Link } from "react-router-dom";
import { FormInput } from "../components";
import { useRegister } from "../hooks/useRegister";
import {useLoginGoogle} from "../hooks/useLoginGoogle"
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let displayName = formData.get("displayName");
  let photoURL = formData.get("photoURL");
  return { email, password, photoURL, displayName };
};
function Register() {
  const userData = useActionData();
  const { registerWithEmail, isPending } = useRegister();
  const {signUpWithGoogle} = useLoginGoogle()
  const [error,setError] = useState({
    email:"",
    password:"",
    displayName:"",
    photoURL:""
  })
  useEffect(() => {
    if(userData){
      if (userData.email.trim() && userData.password.trim()) {
        registerWithEmail(userData);
      } 
      if (!userData.email.trim()){
        setError((prev)=>{
          return{...prev,email:"input-error"}
        })
      } 
      if (!userData.password.trim()){
        setError((prev)=>{
          return{...prev,password:"input-error"}
        })
      }
      if (!userData.photoURL.trim()){
        setError((prev)=>{
          return{...prev,photoURL:"input-error"}
        })
      }
      if (!userData.displayName.trim()){
        setError((prev)=>{
          return{...prev,displayName:"input-error"}
        })
      }
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
        <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
        <FormInput type="text" name="displayName" labelText="Name:" status={error.displayName}/>
        <FormInput type="photoURL" name="photoURL" labelText="Photo URL:" status={error.photoURL}/>
        <FormInput type="email" name="email" labelText="Email:" status={error.email}/>
        <FormInput type="password" name="password" labelText="Password:" status={error.password}/>
        <div>
          <div className="mt-6">
            {!isPending && (
              <button className="btn btn-secondary btn-block">Register</button>
            )}
          </div>
          <div className="mt-6">
            {isPending && (
              <button disabled className="btn btn-secondary btn-block">
                Loading...
              </button>
            )}
          </div>
        </div>
        <p className="text-center mt-2 decoration decoration-dashed text-lg">
          OR
        </p>
        <button type="button" className="btn btn-block mt-2" onClick={signUpWithGoogle}>
          <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>
        <p className="text-center mt-7">
          Already have account?{" "}
          <Link to="/login" className="hover:underline">
            Log in
          </Link>
        </p>
      </Form>
      </div>
    </div>
  );
}

export default Register;
