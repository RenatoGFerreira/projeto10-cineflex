import { ScreenContainer, SeatsSpace, Formulary } from "./StyledSeats";
import Footer from "../../components/Footer/Footer";
import imagem from "../../assets/exemplo.jpg"

export default function Seats() {

    const filme = {
        weekday: "Segunda-Feira",
        date: "12/12/2022",
        showtimes: [{name: "01:00"}, {name: "02:00"}, {name:"06:00"}],
        posterURL: {imagem},
        title: "Shrek"
    }

    return (
        <ScreenContainer>
            <h1>selecione os assentos</h1>
            <SeatsSpace>
                assento1, 2,3,4,5,6
            </SeatsSpace>
            <Formulary>
                Nome do Comprador:
                <input/>
                CPF do Comprador:
                <input/>
                <button>Reservar assentos</button>
            </Formulary>
            
            <Footer movie={filme}/>
        </ScreenContainer>
    )
}