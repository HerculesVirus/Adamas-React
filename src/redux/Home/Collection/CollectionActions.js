
//Collection
import axios from "axios"; 
import{   
    COLLECTION_FAILURE, 
    COLLECTION_SUCCESS, 
    COLLECTION_REQUEST } 
from './CollectionTypes'

export const fetchCollection = ()=> {
    return(dispatch) => {
        dispatch(fetchCollectionRequest())
        axios.get(`http://localhost:8000/api/publicsite/categries`)
        .then(res =>{
            const category = res.data
            console.log(`${category}`)
            dispatch(fetchCollectionSucess(category))
        })
        .catch( err => dispatch(fetchCollectionFailure(err)))    
    }
}

export const fetchCollectionSucess = (data) => {
    return {
        type : COLLECTION_SUCCESS ,
        payload  : data
    }

}

export const fetchCollectionRequest = ()=> {
    return { 
        type : COLLECTION_REQUEST
    }
}

export const fetchCollectionFailure = error => {
    return {
        type :COLLECTION_FAILURE , 
        payload : error
    }
}
