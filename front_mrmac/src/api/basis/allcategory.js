import axios from "../axios";

const getAll=async()=>{
    return  axios.get('/product_category/')
}
export default getAll