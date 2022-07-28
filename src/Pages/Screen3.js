import Success from "../components/Aside/Success/Success";
import React from "react";
import { useEffect  } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function Screen3(props){
    const { cpf, client, day ,title, hour, assetos,thumb, idss } = props;
    const { Section } = useParams();
    
    useEffect(() => {
        const promise = axios.post(`https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many` , {
            ids: {idss},
            name: {client},
            cpf: {cpf},
        });
        promise.then((resposta) => {
            console.log("Assentos Reservados")
        });
        promise.catch((resposta) => {
            console.log("Assentos Não Foram Reservados")
        });
    },[Section, idss, client, cpf]);

    return(
        <>
            <Success cpf={cpf}  thumb={thumb} client={client} day={ day } hour={hour} title={title} assetos={assetos}/> 
        </>
    );
};