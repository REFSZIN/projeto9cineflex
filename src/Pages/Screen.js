import Main from "../components/Main/Main";
import { useEffect , useState } from "react";
import axios from "axios";
import Load from "../components/Load/Load.js";

export default function Screen(props){
    const [filmes,setfilmes] =useState([]);
    const {setVoltar}=props;
    useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
		requisicao.then(resposta => {
			setfilmes(resposta.data);
            setVoltar(false)
		});
	}, [setfilmes,setVoltar]);
if(filmes === []) {
    return(
        <Load />
    );
}
return(
    <>
        <Main filmes={filmes}/>
    </>
);
};