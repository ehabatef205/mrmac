import axios from "../axios";

const   addOrder=async(token, products, phone, country, firstName, lastName, address, city, zipCode)=>{
    return  axios.post('/order_items/create', {
        products: products,
        phone: phone,
        country: country,
        firstName: firstName,
        lastName: lastName,
        address: address,
        city: city,
        zipCode: zipCode
    }
    ,{headers:{authorization:token}}
    )
}
export default addOrder