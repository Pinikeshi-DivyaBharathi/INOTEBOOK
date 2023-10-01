import noteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) =>{
    const s1={
        "name":"Ram",
        "class":"10a"
    };

    const [state,setState] =useState(s1);
    const update = () =>{
        setTimeout(()=>{
            setState({
                "name":"Sitha",
                "class":"10b"
            })
        },1000);
    }
    return(
        <noteContext.Provider value={{state,update}}>
           {props.children}  {/*wraps all its children to use the global context data */}
        </noteContext.Provider>
    );
}

export default NoteState;