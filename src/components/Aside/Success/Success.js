import "./style.js"
import {H6, H4, BtnSuccess,Ticket, CenterBtn, Succeess, Span } from "./style.js"
import { Link } from "react-router-dom";
import React from "react";
import { Tumb } from "../../Main/style.js";
export default function Success(props){
    const {title, hour, day, seat1, seat2, client ,cpf, thumb} = props 
    return(
        <Succeess>
            <H6>Pedido feito com sucesso!</H6>
            <Ticket>
                <article>
                    <H4>Filme e sessão</H4>
                    <Span>{title}<br/>{day} - {hour}</Span>
                </article>
                <article>
                    <H4>Ingressos</H4>
                    <Span>{seat1}<br/>{seat2}</Span>
                </article>
                <article>
                    <H4>Comprador</H4>
                    <Span>Nome:{client}<br/>CPF:{cpf}</Span>
                </article>
            </Ticket>
            <CenterBtn>
                <Link to='/'> <BtnSuccess>Voltar pra Home</BtnSuccess> </Link>
            </CenterBtn>
            <Tumb src={thumb}/>
        </Succeess>
    );
};