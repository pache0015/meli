import { useContext, useEffect } from "react";
import Context from "../context/Context";
import getSearch from "../services/SearchService";

export function useItems(){

    const {search} = useContext(Context)
    const {items, setItems} = useContext(Context)
    const {categories, setCategories} = useContext(Context)

    useEffect( function (){

        getSearch(search)
            .then(obj =>{
                setCategories(obj.categories)
                setItems(obj.items)
            }, [])
    })
    return {items, categories}
}