import Seats from "../components/Aside/Seats/Seats";
import FooterSeats from "../components/Footer/FooterSeats/FooterSeats";
import { useEffect , useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Screen2(){
    const { idSection } = useParams();
    const [seats, setSeats] = useState();
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [ title, setTitle ] = useState();
    const [ thumb, setThumb ] = useState();
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        promise.then((resposta) => {
            setSeats(resposta.data.seats);
            setDay(resposta.data.day.weekday);
            setHour(resposta.data.name);
            setTitle(resposta.data.movie.title);
            setThumb(resposta.data.movie.posterURL);
        });
    },[idSection]);

    return(
        <>
            <Seats seats={seats} />
            <FooterSeats day={day} hour={hour} title={title} thumb={thumb} />
        </>
    );
};