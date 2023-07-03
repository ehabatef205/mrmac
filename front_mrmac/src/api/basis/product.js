import axios from "../axios";

const getProduct=async(product_id)=>{
    return  axios.get(`/product/id/${product_id}`)
}
export default getProduct