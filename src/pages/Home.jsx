import { useSelector } from "react-redux";
import { useCollection } from "../hooks/useCollection";
import { Form, useActionData } from "react-router-dom";
import { FormInput, FormCheckbox } from "../components";
import { useEffect } from "react";
import { useFirestore } from "../hooks/useFirestore";
import ToDoList from "../components/ToDoList";
export const action = async ({ request }) => {
  let formData = await request.formData();
  let title = formData.get("title");
  let completed = formData.get("completed");
  return { title, completed };
};

function Home() {
  const { user } = useSelector((state) => state.user);
  const { addNewDoc, deleteDocument } = useFirestore();
  const { data: todos } = useCollection(
    "todos",
    ["uid", "==", user.uid],
    ["createdAt"]
  );
  const userData = useActionData();
  useEffect(() => {
    if (userData) {
      const newDoc = {
        ...userData,
        uid: user.uid,
      };
      addNewDoc(newDoc);
    }
  }, [userData]);
  return (
    <div className="align-elements">
      <div className="grid grid-cols-2">
        {todos && <ToDoList todos={todos} />}
        <div className="pt-10">
          <Form
            method="post"
            className="flex flex-col justify-center items-center w-96 p-6 border border-gray-500 rounded-lg"
          >
            <h1 className="text-3xl font-semibold text-center">Add New Todo</h1>
            <FormInput type="text" name="title" labelText="Title: " />
            <FormCheckbox name="completed" labelText="Completed: " />
            <div className="w-full">
              <button className="btn btn-primary btn-block mt-5">Add</button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Home;
