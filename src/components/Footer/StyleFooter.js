import styled from "styled-components";

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    height: 80px;
    width: 100%;
    background-color: #dfe6ed;
    position: fixed;
    bottom: 0;
    left: 0;
    color: #9EADBA;
    background-color: #DFE6ED;
    font-size: 25px;
`

export const Poster = styled.div`
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    img{
        width: 50px;
        height: 70px;
        padding: 5px;
    }
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`