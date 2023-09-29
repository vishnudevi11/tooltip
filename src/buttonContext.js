import { createContext,useContext } from "react";
import { useState } from "react";

const selectBtn=createContext();


//hook over the hover
const useValue=()=>{
    const value=useContext(selectBtn);
    return value;
}

const ButtonContext=({children})=>{
    const [pos,setPos]=useState("Top");
    return(
        <selectBtn.Provider value={{pos,setPos}}>
            {children}
        </selectBtn.Provider>
    )
}

//exports
export {useValue};
export default ButtonContext;