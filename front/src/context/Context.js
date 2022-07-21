import React, { useState} from "react";

const Context = React.createContext({})

export function ContextProvider ({children}) {
   
    const [categories, setCategories] = useState([]);
    

    return <Context.Provider value={{
        categories,
        setCategories
    }}>
        {children}
    </Context.Provider>
}

export default Context