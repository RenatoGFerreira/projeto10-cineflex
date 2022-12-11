import styled from "styled-components"

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    text-align: center;
    color: #000;
    margin-top: 30px;
    padding-top: 70px;
    h1{
        text-transform: uppercase;
    }
`

export const Carregando = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    text-align: center;
    color: #000;
    margin-top: 30px;
    padding-top: 70px;
`

export const SeatsSpace = styled.div`
    border: 1px solid red;
    margin: 20px 0;
`

export const CircleContainer = styled.div`

    display: flex;
    flex-direction: row;
    width: 80%;
    height: 10%;
    justify-content: space-between;
    margin: 10px;
`

export const IndividualCircle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
`

export const Circle = styled.div`
    border: 1px solid black;
    background-color: black;
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`

export const Formulary = styled.div`
    border: 1px solid blue;
`
