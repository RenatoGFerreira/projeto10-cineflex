import { ScreenContainer, SeatsSpace, Formulary, CircleContainer, Circle, IndividualCircle, Carregando } from "./StyledSeats";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeatsCard from "../../components/SeatsCard/SeatsCard";

export default function Seats() {

    const { idSessao } = useParams()
    const [session, setSession] = useState(null)


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then(res => setSession(res.data))
        promise.catch(err => console.log(err.response.data))

    }, [])




    if (!session) {
        return <Carregando>Carregando...</Carregando>
    }

    const filme = {
        posterURL: "poster",
        title: "title",
        weekday: "weekday",
        hour: "hour"

    }

    return (
        <ScreenContainer>
            <h1>selecione os assentos</h1>
            <SeatsSpace>
                {session.seats.map(
                    (s) => <SeatsCard seat={s} key={s.id} />
                )}
            </SeatsSpace>
            <CircleContainer>
                <IndividualCircle>
                    <Circle />
                    Selecionado
                </IndividualCircle>
                <IndividualCircle>
                    <Circle />
                    Disponível
                </IndividualCircle>
                <IndividualCircle>
                    <Circle />
                    Indisponível
                </IndividualCircle>
            </CircleContainer>
            <Formulary>
                    Nome do Comprador:
                    <input name="name" placeholder="Digite o seu nome" type="text" />
                    CPF do Comprador:
                    <input name="cpf" placeholder="DIgite o seu cpf" type="number" />
                    <button type="submit">Reservar assentos</button>
            </Formulary>

            <Footer movie={filme} />
        </ScreenContainer>
    )
}