import axios from "../axios";

const getImages=async()=>{
    return  axios.get('/images/'
    )
}
export default getImages