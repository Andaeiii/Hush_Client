import axios from 'axios';

const url = 'http://localhost:5000/api';

export const getAllPosts = () => axios.get(url);