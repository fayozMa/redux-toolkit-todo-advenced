import { useRef } from "react";
import { useFirestore } from "../hooks/useFirestore";
function ModalDialog({ todo }) {
  const { isPending, changeTitle } = useFirestore();
  const ref = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    changeTitle(todo.id, ref.current.value);
    document.getElementById("my_modal_1").close();
  };
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <div className="modal-action">
          <form
            className="flex items-center gap-3"
            onSubmit={handleSubmit}
            method="dialog"
          >
            <input
              className="input"
              type="text"
              defaultValue={todo?.title}
              ref={ref}
            />
            {!isPending && <button className="btn btn-primary">Submit</button>}
            <button
              onClick={() => document.getElementById("my_modal_1").close()}
              type="button"
              classname="btn btn-primary"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalDialog;
