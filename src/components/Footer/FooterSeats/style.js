import styled from 'styled-components';

export const Foooter = styled.footer`
    width: 100%;
    height: 116px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const BackTumbSeat = styled.figure`
    margin: 14px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    width: 64px;
    height: 89px;
    animation: fadeInBottomLeft 2s;
    box-shadow: 1px 2px 5px 5px #aaaaaa;
`;

export const H3 = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    color: #293845;
    animation: fadeInUp 1s;
`;

export const FoooterSeats = styled.section`
    display: flex;
`;

export const TumbFooter = styled.img`
    width: 54px;
    height: 80px;
`;