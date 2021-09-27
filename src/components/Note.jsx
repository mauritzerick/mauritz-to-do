import React from "react";
import { useStoreActions } from "easy-peasy";

const Note = ({ note }) => {
    const { completed } = note;
    const removeNote = useStoreActions(actions => actions.removeNote);
    const toggleNote = useStoreActions(actions => actions.toggleNote);
    return (
        <div class="md:flex md:justify-center">
        <div class="border-blue-500 border-2 rounded-lg py-2 w-4/12">
            <li class="list-none text-2xl">
                <span
                    class="float-left text-black-400"
                    style={{
                        textDecoration: completed ? "line-through" : "",
                        cursor: "pointer"
                    }}
                    onClick={() => toggleNote(note.id)}
                >
                    {note.title}
                </span>
                
                <button
                    class="float-right text-pink-600 opacity-0 hover:opacity-100"
                    onClick={() => removeNote(note.id)}
                >
                    &times;
                </button>
            </li>
            </div>
            </div>
    
    );
};

export default Note;