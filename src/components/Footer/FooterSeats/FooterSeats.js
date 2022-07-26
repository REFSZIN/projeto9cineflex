import {Foooter, BackTumbSeat, H3 , FoooterSeats, TumbFooter} from "./style.js";
import React from "react";
export default function FooterSeats (props){
    return(
        <Foooter>
            <FoooterSeats>
                <BackTumbSeat>
                    <TumbFooter  src={props.thumb} alt="Thumbnail"/>
                </BackTumbSeat>
                <H3>{props.title} <br/>{props.day} - {props.hour} </H3>
            </FoooterSeats>
        </Foooter>
    );
};