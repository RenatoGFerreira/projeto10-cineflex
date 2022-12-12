import styled from "styled-components"
import { seatColors } from "../../constants/seatColors"

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
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    max-width: 84%;
    flex-wrap: wrap;
    justify-content: center;
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
    border: 1px solid ${props => seatColors[props.status].border};
    background-color: ${props => seatColors[props.status].background};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`

export const Form = styled.div`
    padding: 5px;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 15px 0;
    button{
        align-self: center;
        color: #fff;
        background-color: #E8833A;
        height: 42px;
        width: 225px;
        border-radius: 3px;
        margin: 10px 0;
    }
    input{
        height: 30px;
        width: 100%;
        font-size: 18px;
        margin-bottom: 20px;
        margin-top: 10px;

        box-sizing: border-box;
        border-color: #D5D5D5;
    }

`
