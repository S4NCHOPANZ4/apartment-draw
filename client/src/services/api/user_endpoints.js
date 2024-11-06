import axios from 'axios';
const apiUrl = import.meta.env.VITE_BACKEND_URL;



const getUserInfo = () => {

    
    axios.get(`${apiUrl}/user/get-user`).then(res => {
        console.log(res.data);
    }).catch(err => {
        console.error('error on user_edpoints.js gerUserInfo()', err); 
    })
}


export {
    getUserInfo
} 