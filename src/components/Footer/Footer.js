
import {Foooter, BackTumb, H3 , FooterHour, TumbFooter } from"./style.js";
import React from "react";

export default function Footer (props){
    return(
        <Foooter>
            <FooterHour>
                <BackTumb>
                    <TumbFooter src={props.thumb} alt="Thumbnail"/>
                </BackTumb>
                <H3>{props.title}</H3>
            </FooterHour>
        </Foooter>
    );
};