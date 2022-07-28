import "./style.js"
import {Asseto, Ingressos, H6, H4, BtnSuccess,Ticket, CenterBtn, Succeess, Span } from "./style.js"
import { Link } from "react-router-dom";
import React from "react";
import { Tumb } from "../../Main/style.js";
export default function Success(props){
    const {reset, title, hour, day, assetos, client ,cpf, thumb} = props 
    const reseti = reset;
    return(
        <Succeess>
            <H6>Pedido feito com sucesso!</H6>
            <Ticket>
                <article>
                    <H4>Filme e sessão</H4>
                    <Span>{title}<br/>{day} - {hour}</Span>
                </article>
                <Ingressos>
                    <H4>Ingressos</H4>
                    {assetos.map((a, i) => <Asseto key={i}>Assentos: {a} </Asseto>)}
                </Ingressos>
                <article>
                    <H4>Comprador</H4>
                    <Span>Nome:{client}<br/>CPF:{cpf}</Span>
                </article>
            </Ticket>
            <CenterBtn>
                <Link to='/' onClick={() => reseti()}> <BtnSuccess>Voltar pra Home</BtnSuccess> </Link>
            </CenterBtn>
            <Tumb src={thumb}/>
        </Succeess>
    );
};