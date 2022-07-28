import styled from 'styled-components';

export const Head = styled.header`
width: 100%;
height: 70px;
display: flex;
align-items: center;
justify-content: center;
text-align: center;
background: #C3CFD9;
`;

export const H1 = styled.h1`    
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
`;

export const Logo = styled.img `
    width: 60px;
    height: 50px;
`;
export const BackPage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    transform: rotate(230deg);
    margin-right: 10px;
    position: absolute;
    left: 40px;
    &:hover{
    cursor: pointer;
    }
    filter: invert(40%);
`;
export const Aa = styled.nav(({voltar}) =>`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: space-around;
    @media (max-width: 614px) {
        ${voltar ? "margin-left: 70px;" : "margin-left: 0px;"}
    }
`);