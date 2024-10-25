import { useEffect, useState} from 'react';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import './home.css';
//UseEffect assim que abrir a página vai na api e busca os filmes
//useState após a busca armazenar em algum estado para usar na aplicação
//URL DA API: /movie/now_playing?api_key=fe87f11073175e006baff35e3b136a01&language=pt-BR

//Rotas
function Home(){
const [filmes, setFilmes] = useState([]);

const [loading, setLoading] = useState(true);

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
        

        //console.log(response.data.results.slice(0, 10));
        setFilmes(response.data.results.slice(0, 10))
        setLoading(false);
        
    }

    loadFilmes();


}, [])

if(loading){
    return(
        <div className = "loading">
            <h2>Carregando filmes...</h2>
        </div>
    )
}

    return(
        <div className="container">
            <div className="lista-filmes">
            
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
  
        </div>
    )
}

export default Home;