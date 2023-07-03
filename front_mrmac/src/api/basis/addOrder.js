import axios from "../axios";

const   addOrder=async(token, product_id)=>{
    return  axios.post('/order_items/create', {
        product_id: product_id,
        quantity: 1
    }
    ,{headers:{authorization:token}}
    )
}
export default addOrder