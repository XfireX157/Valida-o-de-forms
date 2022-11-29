import {createContext } from "react";

type ContextProviderProps = {
    children: React.ReactNode
}

export const CreateValidation = createContext({})
CreateValidation.displayName = "CreateValidation"

export const CreateValidationContext = ({children}: ContextProviderProps) => {
    
    return(
        <CreateValidation.Provider value={{}}>
            {children}
        </CreateValidation.Provider>
    )
}