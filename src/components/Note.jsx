import React from "react";
import { useStoreActions } from "easy-peasy";

const Note = ({ note }) => {
    const { completed } = note;
    const removeNote = useStoreActions(actions => actions.removeNote);
    const toggleNote = useStoreActions(actions => actions.toggleNote);
    return (
        <div class="place-items-center">
        <div class="flex place-content-center">
            <li class="list-disc-green text-2xl">
                <span
                    class="text-green-400"
                    style={{
                        textDecoration: completed ? "line-through" : "",
                        cursor: "pointer"
                    }}
                    onClick={() => toggleNote(note.id)}
                >

                    {note.title}
                </span>

                <button
                    onClick={() => removeNote(note.id)}
                    className="btn btn-danger btn-lg"
                >
                    &times;
                </button>
            </li>
            </div>
            </div>
    
    );
};

export default Note;