import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    margin-top:10px;
    /* border:1px solid; */
`;

export const ContainerCard = styled.div`
    display:flex;
    margin:20px;
    width: 40vw;
    height:290px;                            
    background-image: linear-gradient(#65A653, #1e2d1a);        
    color: #456075;
`;

export const PokeImg = styled.img`
    display:flex;
    width:230px;
    height:250px;
    /* border: 1px solid; */

`;

export const Etiquetas = styled.div`
    display:flex;
    cursor: context-menu;
`


export const EtiquetaTipo1 = styled.p`

    display: flex;
    justify-content: center;
    align-self: flex-start;
    font-size: x-small;
    color:#5A6990;
    margin: 5px;
    background-color: #FBF03E;
    border-radius: 30px;
    padding: 8px;
    width: 60px;
    font-weight: bold;
`;

export const EtiquetaTipo2 = styled.p`
    display: flex;
    justify-content: center;
    font-size: x-small;
    color: white;
    margin: 5px;
    border-radius: 30px;
    padding: 8px;
    width: 60px;
    font-weight: bold;
    background-color: #4F3C77;

`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    border-collapse: collapse;
    width: 100%;
    background-color:#D9D9D9;
`;


export const Header = styled.header `
    display:flex;
    margin-top:5px;
    justify-content:space-between;

    p{
        font-size: 24px;
        color:#EE4035;
        margin-left: 10px;
    };

    ion-icon{
        justify-content: flex-end;
        color:red;
        font-size: 24px;
        cursor:pointer;
        margin-right: 10px;

    }
`;


export const Tr = styled.tr`
    display: flex;
    margin:5px 8px;
    margin-bottom: 8px;
    justify-content: space-between;

    :hover {
        background-color: yellowgreen ;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        cursor: context-menu;
}
`



