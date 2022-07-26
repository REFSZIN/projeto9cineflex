import Main from "../components/Main/Main";
import { useEffect , useState } from "react";
import axios from "axios";
import Load from "../components/Load/Load.js";

export default function Screen(){
    const [filmes ,setfilmes] =useState([]);

    useEffect(() => {

		const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
		requisicao.then(resposta => {
			setfilmes(resposta.data);
		});
	}, []);
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