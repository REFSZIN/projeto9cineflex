import styled from "styled-components";
import loader from "../../assets/images/loader.gif";

export default function Load(){
    return(
        <Loadin >
            <Loaded src={loader} alt="Loader"/>
            <Aviso>Carregando....</Aviso>
        </Loadin>
    );
};

export const Loadin = styled.section`
    display: flex;
    align-content: center;
    padding-bottom: 120px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    padding-bottom: 120px;
    margin-top: 50%;
`
export const Loaded = styled.img`
    object-fit: cover;
    width: 320px;
    margin-left: 10%;   
    margin-top: 10%;
    height: 10vh;
`
export const Aviso = styled.span`
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #E8833A;
    animation: backInDown 1s;
`