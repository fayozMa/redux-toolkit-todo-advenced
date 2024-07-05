import { addDoc, collection, serverTimestamp , deleteDoc , doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";
export const useFirestore = () => {
  //delete
  const deleteDocument = async (id) => {
    await deleteDoc(doc(db, "todos", id))
    toast.success("Your todo is sucked into black hole !!!");
  };
  //add
  const addNewDoc = async (doc) => {
    await addDoc(collection(db, "todos"), {
      ...doc,
      createdAt: serverTimestamp(),
    });
    toast.success("New Task added! Let's get it done!");
  };
  return { deleteDocument, addNewDoc };
};
