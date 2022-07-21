import styled from 'styled-components'

// export const Container = styled.section `
//     display:flex;
//     /* justify-content:space-evenly; */
//     flex-wrap:wrap;
//     border: 2px solid;
// `;

export const ContainerCard = styled.div `
    /* width:230px;
    height:350px; */
    display:flex;
    /* flex-direction:column; */
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin:40px 20px;
    /* border: 3px solid #D9D9D9; */
    
`;

export const CardTodo = styled.div`
border: 3px solid #D9D9D9; 
width: 230px;
display:flex;
flex-direction:column;
flex-wrap: wrap;
height: 350px;
margin:40px 20px;
 position: relative;
transition: transform 1s;
transform-style: preserve-3d;
text-align: center;
:hover {
transform: rotateY(180deg)
}
`

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
    width: 200px;
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
    width: 225px;
 
`

export const Name = styled.p`
text-align: center;
 background-color: #FBF03E;
    border-radius: 30px;
    padding:8px;
    width: 200px;
    color:#5A6990;
    border:none;
    font-weight: bold;
`
export const Paragrafos = styled.div`
text-align: justify;
padding: 15px;
`

export const CardA = styled.div`
background-color: #D9D9D9;
display: flex;
flex-direction: column;
align-items: center;
text-align: justify;
/* padding: 20px; */
color: #456075;
position: absolute;
width: 230px;
height: 350px;
backface-visibility: hidden;

`
export const CardB = styled.div`
 background-color: #EE4035;
color: white;
display: flex;
flex-direction: column;
transform: rotateY(180deg);
position: absolute;
 width: 230px;
height: 350px;
backface-visibility: hidden;
`
