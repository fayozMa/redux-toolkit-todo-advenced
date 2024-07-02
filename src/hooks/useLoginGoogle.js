import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from '../firebase/firebaseConfig'
import { useDispatch } from "react-redux";
import {login} from "../app/userSlice"
import toast from "react-hot-toast";
function useLoginGoogle() {
  const dispatch = useDispatch()
  const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
   try {
    const result =  await signInWithPopup(auth, provider)
    const user = result.user
    dispatch(login(user))
    toast.success("Welcome!")
   } catch {
    toast.error("Failed")
   }

  };
  return {signUpWithGoogle};
}

export { useLoginGoogle };
