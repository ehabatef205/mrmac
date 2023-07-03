import axios from "../axios";

const searchProduct=async(query)=>{
    return  axios.post('/product/search/',{query})
}
export default searchProduct