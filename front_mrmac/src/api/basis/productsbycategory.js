import axios from "../axios";

const getFaction=async(cat)=>{
    return  axios.get('/product/category/'+cat)
}
export default getFaction