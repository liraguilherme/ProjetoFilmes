
import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/

//URL DA API
// /movie/now_playing?api_key=fe87f11073175e006baff35e3b136a01&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;


