import styled from 'styled-components'

export const Container = styled.section `
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;

`

export const ContainerCard = styled.div `
    width:250px;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin-right:50px;
    border: 1px solid;

    img{
        width:150px;
        height:150px;
    }
`

