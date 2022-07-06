import axios from "axios"

export const registerAdmin= (names, email, phone, nationalId, password)=> {
    return axios.post("http://localhost:4001//api/auth/register", {
        names:names, 
        email:email,
        phone:phone,
        nationalId:nationalId,
        password:password,
    } ).then(res=> {
        // console.log(res.data)
        return res;
    }).catch(e=> {
        console.log(e)
    })
}