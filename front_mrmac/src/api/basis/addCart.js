import axios from "../axios";

const addCart=async(token, product_id)=>{
    return  axios.post('/cart_items/create', {
        product_id: product_id,
        quantity: 1
    }
    ,{headers:{authorization:token}}
    )
}
export default addCart