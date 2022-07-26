import "./style.js";
import {BtnHour, Days, Hoour, Date, H2 } from "./style.js";
import { Link } from "react-router-dom";
import Load from "../../Load/Load.js";

export default function Hour(props){
    const { days } = props;
    if(!days){
        return (<Load />);
    }
    return(
        <Hoour>
            <H2>Selecione o horário</H2>
            {days.map((data, index) =>{
                return(
                <Days key={index}>
                    <Date> {data.weekday} - {data.date}</Date>
                    <div>
                        {data.showtimes.map((showtime, i ) => {
                            return (
                                <Link key={i} to={`/assentos/${showtime.id}`}>
                                    <BtnHour>{showtime.name}</BtnHour>
                                </Link>
                            )
                        })}
                    </div>
                </Days>);
            })}
        </Hoour>)
        }