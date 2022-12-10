import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h1{
        text-transform: capitalize;
        margin-left: 25px;
    }
`

export const ButtonHorario = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 15px 0;
    margin-left: 25px;

    button{
        margin-right: 15px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        border-style: none;
        font-family: 'Roboto';
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        padding: 0 20px;
    }

`