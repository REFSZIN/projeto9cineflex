
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/global.js"
import Screen from "./Pages/Screen";
import Screen1 from "./Pages/Screen1";
import Screen2 from "./Pages/Screen2";
import Screen3 from "./Pages/Screen3";
import Header from "./components/Header/Header";
import ResetCSS from './assets/css/global.js'
import { useState } from "react";

export default function App (){
    const [seats, setSeats] = useState();
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [title, setTitle ] = useState();
    const [thumb, setThumb ] = useState();
    const [overview, setOverview] = useState();
    const [assetos, setAssentos ] = useState([]);
    const [cpf,setCpf] = useState('');
    const [client,setClient] = useState('');
    const [days, setDays] = useState();
    const [idss, setIds] = useState();
    const [voltar , setVoltar] = useState(false);
    const [tela, setTela] = useState("");
    const [idTela, setIdTela] = useState("");
    const [idSectionTela, setIdSectionTela] = useState("");
    const reset = () =>{
        setSeats([]);
        setDay("");
        setHour("");
        setTitle("");
        setThumb([]);
        setOverview("");
        setAssentos([]);
        setCpf('');
        setClient('');
        setDays("");
        setIds([]);
        setVoltar(false)
        setTela("/")
        idSectionTela("")
        idTela("")
    }
    return (
        <>
        <BrowserRouter> 
        <ResetCSS />
        <Header voltar={voltar} setVoltar={setVoltar} tela={tela}/>
            <Routes>
                <Route path="/" element={<Screen setTela={setTela} setVoltar={setVoltar}/>} />
                <Route path="/sessoes/:id" element={<Screen1 setIdTela={setIdTela} setTela={setTela} setVoltar={setVoltar} setThumb={setThumb} setTitle={setTitle} setDays={setDays}  title={title} thumb={thumb}days={days}/>} />
                <Route path="/assentos/:idSection" element={<Screen2 idTela={idTela} setIdSectionTela={setIdSectionTela} setTela={setTela} setIds={setIds} ids={idss} setThumb={setThumb} setOverview={setOverview} setTitle={setTitle} setHour={setHour} setDay={setDay} setSeats={setSeats} day={day} hour={hour} title={title} thumb={thumb} seats={seats} setAssentos={setAssentos} overview={overview} assetos={assetos} setCpf={setCpf} setClient={setClient} cpf={cpf} client={client}/>}/>
                <Route path="/pedido/:cliente" element={<Screen3 idSectionTela={idSectionTela} setTela={setTela}  reset={reset} ids={idss} cpf={cpf}  thumb={thumb} client={client} day={ day } hour={hour} title={title} assetos={assetos}/>}/>
            </Routes> 
        </BrowserRouter>
        </>
    );
};