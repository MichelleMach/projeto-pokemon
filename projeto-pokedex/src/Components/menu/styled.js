import styled from 'styled-components'

export const Menu = styled.div `
    display:flex;
    align-self:center;
    justify-content:center;
    margin-top:20px;
    padding:20px;
    background-color: #FBF03E;
    /* border-top:3px solid #474748;
    border-bottom:3px solid #474748; */
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
    /* color: #EE4035; */
    margin:20px;
    font-weight: bold;

    color: ${props => props.pokedex ? 'blue' : 'red'};
    &:hover {
        cursor:pointer;
    }

`;

export const Background = styled.div `
    background-color: #FBF03E;
    border-top: 1px solid;
    border-bottom: 1px solid;
    width: 100%;
    height: 70px;

`