const fromApiResponseToItems = apiResponse =>{
    const { items = [] } = apiResponse
    const { categories = [] } = apiResponse

    if (Array.isArray(items)){
        return {items: items, categories: categories}
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