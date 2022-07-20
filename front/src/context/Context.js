import React, { useState} from "react";

const Context = React.createContext({})

export function ContextProvider ({children}) {
    const [search, setSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [items, setItems] = useState([]);
    const [item, setItem] = useState([]);

    return <Context.Provider value={{
        search,
        categories,
        items,
        item,
        setSearch,
        setCategories,
        setItems,
        setItem
    }}>
        {children}
    </Context.Provider>
}

export default Context