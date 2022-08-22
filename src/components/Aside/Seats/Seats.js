import "./style.js"
import seatImg from "../../../assets/images/seats.png"
import Load from "../../Load/Load.js";
import { Link } from "react-router-dom"
import SeatBtnComponent from "./SeatBtnComponent.js"
import { Title ,FigCaptionn, ListSeats, H5, H2, BtnAside, SeatBtnDispo, SeatBtnIndispo, SeatBtnSelect, ListTypeSeats, Input, Figure, FigCaption, Setimg, Seeat ,Seeats, CenterBtn, Article } from "./style.js"
export default function Seats(props){
    const {selectSeats, assetos, client , cpf , seats, setAssentos, setClient , setCpf, idss ,setIds} = props
    let preenchido = false;
    if(!seats){
        return (<Load />);
    }
    if(cpf.length >= 11 && client.length >= 3 && assetos.length <= 2){
        preenchido = true;
    }
    let cliente = client;
    return (
        <Seeats>
            <H2>Selecione o(s) assento(s)</H2>
            <ListSeats>
            {seats.map((data, index) =>{
                return(
                <Setimg key={index}>
                    <Seeat src={seatImg} alt="Seat"/>
                    <SeatBtnComponent assetos={assetos} setAssentos={setAssentos} setIds={setIds} idss={idss} data={data} isAvailable={data.isAvailable} selectSeats={selectSeats} >
                    </SeatBtnComponent>
                </Setimg>);
                })
            }
            </ListSeats> 
            <ListTypeSeats>
                <Figure >
                    <SeatBtnSelect></SeatBtnSelect>
                    <FigCaption>Selecionado</FigCaption>
                </Figure>
                <Figure>
                    <SeatBtnDispo></SeatBtnDispo>
                    <FigCaption>Disponível</FigCaption>
                </Figure>
                <Figure>
                    <SeatBtnIndispo></SeatBtnIndispo>
                    <FigCaption>Indisponível</FigCaption>
                </Figure>
            </ListTypeSeats> 
            <Article>
                <H5>Nome do comprador:</H5>
                <Input id="user" name="user" value={client} type="text" placeholder="Digite seu nome..." oninvalid="this.setCustomValidity('Você não tem Nome? 🤔')" onChange={e => setClient(e.target.value)} required/>
                <H5>CPF do comprador:</H5>
                <Input id="cpf" name="cpf" value={cpf} onChange={e => setCpf(e.target.value)} oninvalid="this.setCustomValidity('Você não tem CPF? 🤔')" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" placeholder="Digite seu CPF..." required/>
                <CenterBtn>
                    { preenchido ? 
                    <Link to={`/pedido/${cliente}`}><BtnAside type="submit" >Reservar assento(s)</BtnAside></Link> 
                    : 
                    <BtnAside type="submit" disabled>Reservar assento(s)</BtnAside>}
                </CenterBtn>
            </Article>
            <Title>Sinopse</Title>
            <FigCaptionn>{props.overview}</FigCaptionn>
        </Seeats>
    )
}