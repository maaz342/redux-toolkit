import { createContext } from "react";
export const BioConText=createContext();

export const BioProvider=({children})=>{
    const myName="Maaz";
    console.log(children);
    
    return <BioConText.Provider value={myName}>
{children}
    </BioConText.Provider>
}