const axios = require('axios');
const { json } = require('express');
class MeliManager{
    constructor(){
        this._access_token = 'APP_USR-4135340169236066-071816-fbaf6af742c2ce7da7a86ec68fcb9d5e-179689003'
        this._url_base = 'https://api.mercadolibre.com/'
    }
    
    searchItems(_query){
        return axios.get(`${this._url_base}sites/MLA/search?q=${_query}&limit=4`,{
            headers: {
                'Authorization': ` Bearer ${this._access_token}`
            }
        })
        .then(resp => resp.data.results)
        .catch( err => err )
    }

    getCategories(_id){
        return axios.get(`${this._url_base}categories/${_id}`,{
            headers: {
                'Authorization': ` Bearer ${this._access_token}`
            }
        })
        .then(res => {
            return res.data.path_from_root
        })
        .catch(err => {
            return err
        })
    }

    getItem(_id){
        return axios.get(`${this._url_base}items/${_id}`,{
            headers: {
                'Authorization': ` Bearer ${this._access_token}`
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
        
    }

    getItemDescription(_id){
        return axios.get(`${this._url_base}items/${_id}/description`,{
            headers: {
                'Authorization': ` Bearer ${this._access_token}`
            }
        })
        .then(res => {
            return res.data
        })
        .catch(err => {
            return err
        })
    }
}
module.exports = {
    MeliManager : MeliManager
}