import styled from 'styled-components'

export const Menu = styled.div `
    position:absolute;
    top: 20px;
    left:0;
    right:0;
    display:flex;
    justify-content:center;
    padding:20px;
    background-color:white;
    height:20px;

`

export const Container = styled.ul `
    align-items:center;
    display:flex;
    list-style:none;

`

export const ImagemPokebola = styled.img `
    width:100px;
    height: 100px;
    position: relative;

`

export const Nav = styled.li `
    color: #EE4035;
    margin:20px;
    font-weight: bold;
    /* color: ${props => props.pokedex ? 'blue' : 'red'}; */
    &:hover {
        cursor:pointer;
    }

`;

export const Background = styled.div `
    background-color: #FBF03E;
    width: 100%;
    height: 70px;

`