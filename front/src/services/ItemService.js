const fromApiResponseToItem = apiResponse =>{
    const { item } = apiResponse
    return {item}
}


export default function getItem(_id){
    return fetch(`http://localhost:8080/api/items/${_id}`,{
        mode: 'cors'
    })
            .then(res => res.json())
            .then(fromApiResponseToItem)
}