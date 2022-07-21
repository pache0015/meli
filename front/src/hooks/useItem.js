import { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import getItem from "../services/ItemService";
import getSearch from "../services/SearchService";

export function useItem({id}){

    const [item, setItem] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect( function (){

        //console.log(id)
        if(id){
            setIsLoading(true)
            getItem(id)
                .then(item =>{
                    setItem(item)
                    setIsLoading(false)
                    setIsError(false)
                    
                }).catch(err =>{
                    console.log(err)
                    setIsLoading(false)
                    setIsError(true)
                })}
    }, [item, id])
    return {item, isLoading, isError}
}