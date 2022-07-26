import "./style.js"
import { Link } from "react-router-dom";
import {Maiin ,Mainn, H2, ListTumbs, BackTmbMain, Tumb } from "./style.js"
export default function Main (props){
    const { filmes } = props;
    return(
        <Maiin>
            <Mainn>
            <H2>Selecione o filme</H2>
            <ListTumbs>
                {filmes.map((filme, index) =>{
                    return(
                        <BackTmbMain key={index}>
                            <Link to={`/sessoes/${filme.id}`} >
                                <Tumb src={filme.posterURL} alt={filme.title}/>
                            </Link>
                        </BackTmbMain>)
                    }
                    )}
                </ListTumbs>
            </Mainn>
        </Maiin>
    );
};