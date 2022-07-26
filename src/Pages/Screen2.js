import Seats from "../components/Aside/Seats/Seats";
import Success from "../components/Aside/Success/Success";
import FooterSeats from "../components/Footer/FooterSeats/FooterSeats";
import { useEffect  } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Screen2(props){
    const { seats ,setSeats,day ,setDay ,hour ,setHour ,title ,setTitle , thumb, setThumb , overview, setOverview , assetos,setAssentos ,cpf , setCpf,client ,setClient} = props;
    const { idSection } = useParams();
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSection}/seats`);
        promise.then((resposta) => {
            setSeats(resposta.data.seats);
            setDay(resposta.data.day.weekday);
            setHour(resposta.data.name);
            setTitle(resposta.data.movie.title);
            setThumb(resposta.data.movie.posterURL);
            setOverview(resposta.data.movie.overview);
        });
    },[idSection]);
    return(
        <>
            {
            true ?
            <>           
                <Seats seats={seats} setAssentos={setAssentos} overview={overview} assetos={assetos} setCpf={setCpf} setClient={setClient} cpf={cpf} client={client} />
                <FooterSeats day={day} hour={hour} title={title} thumb={thumb} />
            </>
            :
                <Success cpf={cpf}  thumb={thumb} client={client} day={ day } hour={hour} title={title} assetos={assetos}/> 
            }
        </>
    );
};