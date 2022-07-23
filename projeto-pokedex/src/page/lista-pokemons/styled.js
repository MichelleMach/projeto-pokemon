import styled from 'styled-components'

export const ContainerCard = styled.div`
    /* width:230px;
    height:350px; */
    display:flex;
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

export const ImagemPoke = styled.img`
    display:flex;
    align-items:center;
    width:230px;
    height:250px;
    `;

export const BotaoAdicionar = styled.button`
    margin-top: 10px;
    background-color: #EE4035;
    border-radius: 30px;
    padding:8px;
    width: 200px;
    color:white;
    border:none;
    font-weight: bold;
    &:hover {
        cursor:pointer
    }
`

export const Botoes = styled.div`
    display:flex;
    align-items:center;
    margin-top: 5px;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: white;
    height: 90px;
    width: 225px;
`
export const Tipo = styled.p`
display: flex;
justify-content: center;
align-self: flex-end;
font-size: x-small;
color: white;
margin-top: 2px;
margin-right: 5px;
 background-color: #4F3C77;
    border-radius: 30px;
   padding: 10px;
    width: 50px;
    font-weight: bold;
`

export const CTp = styled.div`
display: flex;
justify-content: right;
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
font-size: 12px;
color: #323232;
`

export const CardA = styled.div`
background-color: #D9D9D9;
display: flex;
flex-direction: column;
align-items: center;
text-align: justify;
color: #456075;
position: absolute;
width: 230px;
height: 350px;
backface-visibility: hidden;

`
export const CardB = styled.div`
 background-color: #D9D9D9;
color: white;
display: flex;
flex-direction: column;
transform: rotateY(180deg);
position: absolute;
 width: 230px;
height: 350px;
backface-visibility: hidden;
`
export const Stack = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
`
export const Table = styled.table`
display: flex;
flex-direction: column;
border-collapse: collapse;
  width: 100%;
  
`
export const Tr = styled.tr`
display: flex;
justify-content: space-between;

:hover {background-color: yellowgreen ;
    -webkit-transform: scale(1.1);
  transform: scale(1.1);}
`
export const Td = styled.td`
margin: 5px;
`
export const Td2 = styled.td`
margin-right: 5px;
`
export const Th = styled.th`
margin-left: 15%;
height: 35px;
font-size: 15px;
`
export const Girar = styled.img`
width: 40px;
`
export const TipoP = styled.p`
display: flex;
justify-content: center;
align-self: flex-end;
font-size: x-small;
color:#5A6990;
margin-top: 2px;
margin-right: 5px;
 background-color: #FBF03E;
    border-radius: 30px;
   padding: 10px;
    width: 70px;
    font-weight: bold;
`

