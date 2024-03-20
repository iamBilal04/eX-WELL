import { createContext,useContext,useState } from "react";

const FilePathContext=createContext();


export const FilePathProvider=({children})=>{
    const [predictions,setPredictions]=useState(null);
   return(
    <FilePathContext.Provider value={{predictions,setPredictions}}>
        {children}
    </FilePathContext.Provider>
   )
};
export const useFilePath=()=>{
    return useContext(FilePathContext);
}