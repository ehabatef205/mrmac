import axios from "../axios";

const getuser=async(token)=>{
    return  axios.get('/user/view_profile'
    ,{headers:{authorization:token}}
    )
}
export default getuser