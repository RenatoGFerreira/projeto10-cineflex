import { ScreenContainer, ListContainer } from "./StyledSessions"
import SessionCard from "../../components/SessionCard/SessionCard"
import Footer from "../../components/Footer/Footer"


export default function Sessions() {
    return (
        <ScreenContainer>
            <h1>selecione o horário</h1>
            <ListContainer>
                <SessionCard/>
                <Footer/>
            </ListContainer>
        </ScreenContainer>
    )
}




