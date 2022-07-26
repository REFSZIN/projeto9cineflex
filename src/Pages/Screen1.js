import Hour from "../components/Aside/Hour/Hour";
import Footer from "../components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Screen1(){
    const { id } = useParams();

    const [days, setDays] = useState();
    const [thumb, setThumb] = useState();
    const [title, setTitle] = useState();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
        promise.then((resposta) => {
            setDays(resposta.data.days);
            setTitle(resposta.data.title);
            setThumb(resposta.data.posterURL);
        });
    },[id]);


    return(
        <>
            <Hour days={days}/>
            <Footer title={title} thumb={thumb} />
        </>
    );
};