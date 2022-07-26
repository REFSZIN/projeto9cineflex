import { Link } from "react-router-dom";
import Imglogo from "../../assets/images/logo.png";
import React from "react";
import { Head  , H1 ,Logo , Aa } from './style.js';
export default function Header(){
    return(
        <Head>
            <Link to='/'>
                <Aa>
                    <Logo src={Imglogo} alt="Logo"/>
                    <H1>CINEFLEX</H1>
                </Aa>
            </Link>
        </Head>
    );
};