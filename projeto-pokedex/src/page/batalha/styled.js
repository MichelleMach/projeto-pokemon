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
    width: 90vw;
    justify-content:space-between;
    align-items:center;
    padding:30px;
    /* border: 1px solid; */

`
export const VS = styled.img `
    width: 120px;
    height: 120px;

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
