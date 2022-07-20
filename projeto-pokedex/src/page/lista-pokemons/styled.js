import styled from 'styled-components'

export const Container = styled.section `
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;

`;

export const ContainerCard = styled.div `
    width:230px;
    height:350px;
    display:flex;
    flex-direction:column;
    margin:40px 20px;
    border: 3px solid #D9D9D9;
    background-color: #D9D9D9;
`;

export const ImagemPoke = styled.img `
    display:flex;
    align-items:center;
    width:230px;
    height:250px;
    /* &:hover {
    transform: scale(1.2);
    transition: all 0.5s;
    }
    &:hover:after {
    transform: scale(1);
    transition: 1s;
    } */

`;

export const BotaoAdicionar = styled.button `
    background-color: #EE4035;
    border-radius: 30px;
    padding:8px;
    width: 220px;
    color:white;
    border:none;
    font-weight: bold;
    &:hover {
        cursor:pointer
    }
`;

export const BotaoDetalhe = styled.button `
    background-color: #FBF03E;
    border-radius: 30px;
    padding:8px;
    width: 220px;
    color:#5A6990;
    border:none;
    font-weight: bold;
    &:hover {
        cursor:pointer
    }
`;

export const Botoes = styled.div `
    display:flex;
    align-items:center;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    height: 100px;
`

