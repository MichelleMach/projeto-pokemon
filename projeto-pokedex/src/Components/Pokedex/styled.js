import { green } from '@mui/material/colors';
import styled from 'styled-components'

export const Container = styled.main`
    display:inline-flex;
flex-direction: row;
flex-wrap: wrap;
`

export const ContainerCard = styled.div`
    display:flex;
    margin:50px;
    width: 440px;
    height:280px;
    font-size:30px;
    padding:5px;                              
    left: 0px;
    top: 0px;
    background: #76A866;
    border-radius: 12px;          
    flex-direction: column;
    align-items: flex-start;
    text-align: justify;
    color: #456075;
    position: absolute;
    border: 3px black solid;
    flex-wrap: wrap;
    background-color:#729F92;
    
`

export const PokeImg = styled.img`
display:flex;
    align-items:center;
    width:230px;
    height:250px;
    background:"#729F92";

`

