import { CART_PRODUCT_REQUEST, CART_PRODUCT_SUCCESS, CART_PRODUCT_ERROR } from "../type";
import datas from '../../data.json'

const handleCartAction = (id) => async dispatch =>{
    try {
        dispatch(handleCartRequest())
        console.log(id);
        const data = await datas
        const filtr = data.map(index => index).splice(id)

        dispatch(handleCartSuccess(filtr))
    } catch (error) {
        dispatch(handleCartError(error))
    }
}

const handleCartRequest = () =>{
    return{
        type : CART_PRODUCT_REQUEST,
        loading : true
    }
}

const handleCartSuccess = (data) =>{
    return{
        type : CART_PRODUCT_SUCCESS,
        payload : data,
        loading : false
    }
}

const handleCartError = (data) =>{
    return{
        type : CART_PRODUCT_ERROR,
        payload : data,
        loading : false
    }
}

export default handleCartAction