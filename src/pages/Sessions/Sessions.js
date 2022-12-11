import { ScreenContainer, ListContainer, Carregando } from "./StyledSessions"
import SessionCard from "../../components/SessionCard/SessionCard"
import Footer from "../../components/Footer/Footer"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Sessions() {

    const {idFilme} = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`)

        promise.then(res => setMovie(res.data))
        promise.catch(err => console.log(err.response.data))

    }, [])

    if (!movie) {
        return (
            <Carregando>Loading...</Carregando>
        )
    }

    return (
        <ScreenContainer>
            <h1>selecione o horário</h1>
            <ListContainer>
                {movie.days.map((filme) => <SessionCard key={filme.id} movie={filme}/>)}
            </ListContainer>
                <Footer movie={movie} />
        </ScreenContainer>
    )
}