import Hour from "../components/Aside/Hour/Hour";
import Footer from "../components/Footer/Footer";
import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Screen1(props){
    const { id } = useParams();
    const {days,thumb,title} = props
    useEffect((props) => {
        const {setVoltar,setIdTela, setTela, setDays, setThumb, setTitle} = props
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${id}/showtimes`);
        promise.then((resposta) => {
            setDays(resposta.data.days);
            setTitle(resposta.data.title);
            setThumb(resposta.data.posterURL);
            setVoltar(true)
            setTela("/")
            setIdTela(id)
        });
    },[id]);
    return(
        <>
            <Hour days={days}/>
            <Footer title={title} thumb={thumb} />
        </>
    );
};