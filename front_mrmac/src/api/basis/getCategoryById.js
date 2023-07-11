import axios from "../axios";

const getCategoryByID=async(id)=>{
    return await axios.get(`/product_category/${id}`)
}
export default getCategoryByID