import { SHOP_FAILURE, SHOP_REQUEST, SHOP_SUCCESS } from "./ShopTypes";

const initialState = {
    loading : true,
    data : '' ,
    error : '' 
 // ALL category vs _id Category  
    //1 - This Boolean Tells which type of Category CardGRid is Called
}

const ShopReducer = (state = initialState , action)=> {
    switch(action.type){
        case SHOP_REQUEST:
            return {
                loading : true
            }
        case SHOP_SUCCESS:
            return {
                loading : false ,
                data : action.payload
            }
        case SHOP_FAILURE:
            return {
                loading : true , 
                data : action.payload
            }
        default: return state
    }

}

export default ShopReducer;