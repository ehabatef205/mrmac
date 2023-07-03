import axios from "../axios";

const removeCart=async(cart_id)=>{
    return  axios.delete(`/cart_items/${cart_id}`)
}
export default removeCart