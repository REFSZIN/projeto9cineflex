import styled from 'styled-components';

export const ListSeats = styled.article`
    width: 320px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
`;
export const Article =styled.form``

export const H5 = styled.label`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    color: #293845;
`;

export const BtnAside = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    border: none;
    margin-top: 40px;
`;

export const SeatBtn = styled.button`
    position: relative;
    height: 22px;
    width: 22px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    padding-right: 2px;
    margin-bottom: 10px;
    margin-left: 6px;
    animation: slideInDown 1s;
    &:hover{
        cursor: pointer;
    }
`;

export const SeatBtnDispo = styled.button`
    height: 20px;
    width: 20px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    padding-right: 7px;
    margin-bottom: 10px;
    margin-left: 10px;
    &:hover{
        cursor: default;
    }
`;

export const SeatBtnIndispo = styled.button`
    height: 20px;
    width: 20px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    border-radius: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    padding-right: 7px;
    margin-bottom: 10px;
    margin-left: 10px;
    &:hover{
        cursor: default;
    }
`;

export const ListTypeSeats = styled.article`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    animation: slideInDown 1s;
`;

export const Input = styled.input`
    width: 300px;
    height: 40px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 12px;
    margin-bottom: 10px;
    padding-left: 10px;

    &::placeholder{
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #AFAFAF;
    }
`;

export const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: space-around;
    flex-wrap: nowrap;
`;

export const FigCaption = styled.figcaption`
    margin-right: 10px;
    margin-left: 10px;
`;

export const SeatBtnSelect = styled.button`
    height: 20px;
    width: 20px;
    border-radius: 17px;
    border-radius: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    padding-right: 7px;
    margin-bottom: 10px;
    margin-left: 10px;
    &:hover{
        cursor: default;
    }
`;

export const CenterBtn = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const Setimg = styled.div`
    position: relative;
    height: 22px;
    width: 22px;
    border-radius: 100%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 13px;
    display: grid;
    align-items: end;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    padding-right: 2px;
    margin-bottom: 12px;
    margin-left: 10px;
    animation: slideInDown 1s;
    align-content: space-around;
    justify-content: end;
    justify-items: stretch;
`;

export const Seeat = styled.img`
    z-index: -1;
    position: absolute;
    left: -5px;
    width: 28px;
    height: 36px;
`;

export const Seeats = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 130px;
`;

export const H2 = styled.h2`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #293845;
    margin-top: 10px;
    margin-bottom: 40px;
`;