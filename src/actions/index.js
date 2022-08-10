import axios from 'axios';

export function getDogs(){
    return async function (dispatch){
        var json = await axios.get('https://calm-castle-65099.herokuapp.com/dogs')
        return dispatch({
        type: 'GET_DOGS',
        payload: json.data
        })
    }
}

export function filterByOrigin(payload){
    return {
        type: 'FILTER_BY_ORIGIN',
        payload: payload
    }
}

export function filterByTemperament(payload){

         return {
             type: 'FILTER_BY_TEMPERAMENT',
             payload: payload
         }
}
export function orderByName(payload){
    return {
        type: 'ORDER_BY_NAME',
        payload: payload
    }
}

export function orderByWeight(payload){
    return {
        type: 'ORDER_BY_WEIGHT',
        payload: payload
    }
}

export function getNameDogs (name) {
    return async function (dispatch){
       try {
        var json = await axios.get('https://calm-castle-65099.herokuapp.com/dogs?name='+name)
        return dispatch({
            type: 'GET_NAME_DOGS',
            payload: json.data
        })
    } catch (error) {
        console.log(error)
    }
}}

export function getTemperaments(){
    return async function (dispatch){
        var json = await axios.get('https://calm-castle-65099.herokuapp.com/temperament')
        return dispatch({
        type: 'GET_TEMPERAMENTS',
        payload: json.data
        })
    }
}

export function postDog(payload){
    return async function (dispatch){
        var json = await axios.post('https://calm-castle-65099.herokuapp.com/dogs', payload)
        return json.data
    }
}

export function getDetail (id) {
    return async function (dispatch){
        try{
            var json = await axios.get('https://calm-castle-65099.herokuapp.com/dogs/'+id);
            return dispatch(
                {
                type: 'GET_DETAIL',
                payload: json.data
            },
            )
    } catch (error){
        console.log(error)
    }
    }
}