import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

const NotesForm = () => {
    const [title, setTitle] = useState("");
    const [err, setErr] = useState(false);
    const addNote = useStoreActions(actions => actions.addNote);
    const handleSubmit = e => {
        e.preventDefault();
        if (title.trim() === "") {
            setErr(true);
        } else {
            setErr(false);
            addNote({
                title,
                completed: false
            });
        }
        setTitle("");
    };
    return(
        <>
            <div class="place-items-center">
            <div class="flex place-content-center">
            <form onSubmit={handleSubmit} className="d-flex py-5 form-inline">
                <input
                type="text"
                placeholder="What needs to be done?"
                value={title}
                className="border-solid border-blue-500 border rounded-lg py-2 px-4 w-rounded text-gray-700 italic"
                onChange={e => setTitle(e.target.value)}
                />
               
            </form>
            {/* {err && (
                <div className="alert alert-dismissible alert-danger">
                    <button
                        type="button"
                        className="close"
                        data-dismiss="alert"
                        onClick={() => setErr(false)}
                    >
                        &times;
                    </button>
                    <strong>oh no!</strong>{" "}
                    <span className="alert-link">please add a valid text</span>
                </div>
            )} */}
            </div>
            </div>
            </>
    );
};

export default NotesForm;