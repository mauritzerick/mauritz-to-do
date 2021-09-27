import React from "react";
import { useStoreState } from "easy-peasy";
import Note from "./Note";

const Notes = () => {
    const notes = useStoreState((state) => state.notes);

    return (
        <>
         <div class="justify-center items-centers">

            {notes.length === 0 ? (
                <h2 class=""></h2>
            ) : (
                notes.map((note) => <Note key={note.id} note={note} />)
            )
            
            }
            
        </div>
          
        </>
        
    );
};

export default Notes;