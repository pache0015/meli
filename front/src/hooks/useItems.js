import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import getSearch from "../services/SearchService";

export function useItems({search}){

    const [items, setItems] = useState([])
    const {setCategories} = useContext(Context)

    useEffect( function (){
        
        if(items){
        getSearch(search)
            .then(obj =>{
                
                setItems(obj.items)
                setCategories(obj.categories)
            })
            .catch(err =>{
                console.log(err)
            })
        }
    }, [items, search, setCategories])
    return { items}
}