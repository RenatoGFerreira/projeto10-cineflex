import styled from "styled-components"


export const ScreenContainer = styled.div`
    align-self: center;
    max-width: 84%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: center;
    font-size: 25px;
    text-align: center;
    color: #000;
    margin: 0 auto;
    margin-top: 30px;
    padding-top: 70px;
    span{
        font-size: 26px;
        max-width: 45%;
        align-self: center;

    }
`

export const TextContainer = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    button{
        align-self: center;
        color: #fff;
        background-color: #E8833A;
        height: 42px;
        width: 225px;
        border-radius: 3px;
        margin: 10px 0;
        font-size: 16px;
        margin-top: 40px;
    }
`