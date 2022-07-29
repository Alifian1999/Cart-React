import { CART_PRODUCT_REQUEST, CART_PRODUCT_SUCCESS, CART_PRODUCT_ERROR } from "../type";

const initialState = {
    title : '',
    description : '',
    color : '',
    size : '',
    image : ''
}
const handleCartReducer = (state = initialState, action) =>{
    switch (action.type) {
        case CART_PRODUCT_REQUEST:
            return{
                loading : action.loading,
            }
        case CART_PRODUCT_SUCCESS:
            return{
                loading : action.loading,
                payload : action.payload
            }
        case CART_PRODUCT_ERROR:
            return{
                loading : action.loading,
                payload : action.payload
            }
        default:
            return state
    }
}

export default handleCartReducer