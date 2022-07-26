import styled from 'styled-components';

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
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const BtnHour = styled.button`
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
    margin-top: 20px;
    margin-right: 10px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    border: none;
`;

export const Days = styled.article`
    width: 100%;
    height: 80px;
    margin-bottom: 18px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    animation: pulse 1s;
`;

export const Hoour = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding-bottom: 120px;
`;

export const Date = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #293845;
`;
