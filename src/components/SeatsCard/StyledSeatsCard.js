import styled from "styled-components"
import { seatColors } from "../../constants/seatColors";


export const SeatsCard = styled.div`
    border: 1px solid ${props => seatColors[props.status].border};
    background-color: ${props => seatColors[props.status].background};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
    font-size: 16px;
    font-weight: 800;
`