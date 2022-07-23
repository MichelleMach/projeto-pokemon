import styled from "styled-components";
import BackgroundImage from '../../assets/lance-valencia-asset.jpg'

export const Background = styled.div`
    height:100vh; 
    weight: 100%; 
    background-image:url(${BackgroundImage});
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const BatalhaPokemons = styled.div `
    display:flex;
    align-items:center;

`

export const ContainerWinner = styled.div `
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
    ion-icon{
        font-size: 60px;
    }
`


