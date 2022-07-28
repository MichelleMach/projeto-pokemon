import styled from 'styled-components'

export const Menu = styled.div `

    display:flex;
    align-self:center;
    justify-content:center;
    margin-top:20px;
    padding:20px;
    background-color: #FBF03E;
    width:100%;
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
    :hover,
button:focus {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

`

export const Nav = styled.li `
    color: #EE4035;
    margin:20px;
    font-weight: bold;

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

export const TextoBotao = styled.p `
margin-top: 10px;
    :hover,
button:focus {
  color: #5A6990;  
  border-bottom: 3px solid #5A6990;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
`
