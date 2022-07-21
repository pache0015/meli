import { useEffect, useState } from "react";
import getItem from "../services/ItemService";

export function useItem({id}){

    const [item, setItem] = useState()

    useEffect( function (){

        if(id){
            getItem(id)
                .then(item =>{
                    setItem(item)
                }).catch(err =>{
                    console.log(err)
                })}
    }, [item, id])
    return {item}
}