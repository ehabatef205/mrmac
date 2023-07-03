import axios from "../axios";

const updateuser=async( first_name, last_name , telephone  , token)=>{
    return  axios.patch('/user/update_profile'
    ,{first_name, last_name , telephone},
    {headers:{authorization:token}}
    )
}
export default updateuser