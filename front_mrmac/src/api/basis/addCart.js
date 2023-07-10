import axios from "../axios";

const addCart=async(token, product_id, quantity)=>{
    return  axios.post('/cart_items/create', {
        product_id: product_id,
        quantity: quantity
    }
    ,{headers:{authorization:token}}
    )
}
export default addCart