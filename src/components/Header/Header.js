import { Link } from "react-router-dom";
import Imglogo from "../../assets/images/logo.png";
import Back from "../../assets/images/backpage.gif";
import React from "react";
import {BackPage, Head  , H1 ,Logo , Aa } from './style.js';
import { useNavigate } from 'react-router-dom';

export default function Header(props){
    const{voltar, setVoltar}= props
    const navigate = useNavigate();
    return(
        <Head>
            {voltar?<BackPage onClick={() => navigate(-1)} src={Back} alt="BackPage"/>:<></>}
            <Link onClick={() => setVoltar(false)} to='/'>
                <Aa voltar={voltar}>
                    <Logo src={Imglogo} alt="Logo"/>
                    <H1>CINEFLEX</H1>
                </Aa>
            </Link>
        </Head>
    );
};