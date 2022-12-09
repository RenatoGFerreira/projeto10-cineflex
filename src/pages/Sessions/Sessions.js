import { ScreenContainer, ListContainer } from "./StyledSessions"
import SessionCard from "../../components/SessionCard/SessionCard"
import Footer from "../../components/Footer/Footer"
import imagem from "../../assets/exemplo.jpg"


export default function Sessions() {

    const filme = {
        weekday: "Segunda-Feira",
        date: "12/12/2022",
        showtimes: [{name: "01:00"}, {name: "02:00"}],
        posterURL: {imagem},
        title: "Shrek"
    }
    return (
        <ScreenContainer>
            <h1>selecione o horário</h1>
            <ListContainer>
                <SessionCard movie={filme}/>
                <Footer movie={filme}/>
            </ListContainer>
        </ScreenContainer>
    )
}




