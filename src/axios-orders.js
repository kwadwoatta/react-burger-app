import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-e6db9.firebaseio.com/'
});

export default instance;
