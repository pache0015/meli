import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import getSearch from "../services/SearchService";

export function useItems({search}){
// Se usa el hook state para guardar lo traido por el service
//      y el context para guarda las categorias que vienen en la misma query
    const [items, setItems] = useState([])
    const {setCategories} = useContext(Context)

    //Se usa useEffect para que al cambiar cualquiera de los elementos del array
    //  vuelva a realizar la funcion que contiene
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