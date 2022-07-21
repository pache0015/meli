const fromApiResponseToItems = apiResponse =>{
    const { items = [] } = apiResponse
    const { categories = [] } = apiResponse

    if (Array.isArray(items)){
        return {items: items, categories: categories}
        // Se retorna obj para manejarlo de forma más prolija en el hook
    }
    return []
}


export default function getSearch(query){
    return fetch(`http://localhost:8080/api/items?q=${query}`,{
        mode: 'cors'
    })
            .then(res => res.json())
            .then(fromApiResponseToItems)
}