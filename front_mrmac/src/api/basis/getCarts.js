import axios from "../axios";

const getCarts=async(token)=>{
    return  axios.get('/cart_items/'
    ,{headers:{authorization:token}}
    )
}
export default getCarts