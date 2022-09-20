



import axios from 'axios';

async function getPosts(userId) {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`); 

    return data;
}



export default getPosts;