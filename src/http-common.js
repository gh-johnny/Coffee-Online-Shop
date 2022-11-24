//Don't forget to install axios in your app "npm install axios"
import axios from 'axios';
export default axios.create({
    baseURL: '',
    headers: {
        'content-type' : 'application/json'
    }
});