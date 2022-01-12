
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
        // axios.get(`${process.env.REACT_APP_URL}/v1/site-categories/categries`,{},{withCredentials: true,credentials:'include',headers: {"Access-Control-Allow-Origin": true}})
        fetch(`${process.env.REACT_APP_URL}/v1/site-categories/categries`, {
            method: 'get',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            withCredentials: true,
        })
        .then(res =>{
            const category = res.data
            //console.log(`${category}`)
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
