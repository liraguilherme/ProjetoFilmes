import { useEffect, useState} from 'react';
import api from '../../services/api';

//UseEffect assim que abrir a página vai na api e busca os filmes
//useState após a busca armazenar em algum estado para usar na aplicação
//URL DA API: /movie/now_playing?api_key=fe87f11073175e006baff35e3b136a01&language=pt-BR

//Rotas
function Home(){
const [filmes, setFilmes] = useState([]);

useEffect(() =>{

    async function loadFilmes() {
        //await para aguardar a requisição para passar pra linha de baixo
        const response = await api.get("/movie/now_playing",{
            params:{
                api_key:"fe87f11073175e006baff35e3b136a01",
                language: "pt-BR",
                page: 1,

            }
        })

        console.log(response.data.results);
        
    }

    loadFilmes();


}, [])

    return(
        <div>
            <h1>BEM VINDO A HOME</h1>
        </div>
    )
}

export default Home;