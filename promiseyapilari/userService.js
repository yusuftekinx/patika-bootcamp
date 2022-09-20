
import axios from 'axios';

async function getUser(userId) {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`); 

    return data;
}



export default getUser;