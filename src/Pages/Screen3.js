import Success from "../components/Aside/Success/Success";
import React from "react";

export default function Screen3(props){
    const { cpf, client, day ,title, hour, assetos,thumb } = props;
    return(
        <>
            <Success cpf={cpf}  thumb={thumb} client={client} day={ day } hour={hour} title={title} assetos={assetos}/> 
        </>
    );
};