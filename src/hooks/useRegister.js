import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { login } from "../app/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
const useRegister = () => {
  const [isPending, setIsPending] = useState(false);
  const dispatch = useDispatch();
  const registerWithEmail = async ({
    email,
    password,
    displayName,
    photoURL,
  }) => {
    setIsPending(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL
      });
      const user = userCredential.user;
      dispatch(login(user));
      toast.success("Welcome");
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
      toast.error("failed");
    }
  };

  return { registerWithEmail, isPending };
};

export { useRegister };
