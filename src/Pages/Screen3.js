import Success from "../components/Aside/Success/Success";
import React from "react";

export default function Screen3(props){
    const { cpf, client, day ,title, hour } = props;

    return(
        <>
            <Success cpf={cpf} client={client} day={ day }hour={hour} title={title}/>
        </>
    );
};