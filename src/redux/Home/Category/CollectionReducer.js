import { COLLECTION_FAILURE, COLLECTION_REQUEST, COLLECTION_SUCCESS } from "./CollectionTypes"

const initialState = {
    loading : true , 
    data : '' ,
    error : ''
}

const CollectionReducer = (state = initialState , action)=> {
    switch(action.type){
        case COLLECTION_REQUEST : 
        return {
            loading : true
        }
        case COLLECTION_SUCCESS :
            return {
                loading : false , 
                data : action.payload
            }
        case COLLECTION_FAILURE : 
            return {
                loading : true , 
                error : action.payload
            }
        default : return state;
    }
}

export default CollectionReducer;