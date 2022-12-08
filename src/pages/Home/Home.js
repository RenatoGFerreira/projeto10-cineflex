import { ScreenContainer, Lista, Carregando } from "./StyledHome"
import { useEffect, useState } from "react"
import { URL } from "../../constants/URL"
import axios from "axios"
import MovieCard from "../../components/MovieCard/MovieCard"

export default function Home() {

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const promise = axios.get(`${URL}/movies`)

        promise.then(res => setMovie(res.data))

        promise.catch(err => console.log(err.response.data))

    }, [])


    if (!movie) {
        return (
            <Carregando>Loading...</Carregando>
        )
    }

    return (
        <>
            <ScreenContainer>
                Selecione o Filme
                <Lista>
                    {movie.map((filme) => (
                        <MovieCard
                            key={filme.id}
                            title={filme.title}
                            posterURL={filme.posterURL}
                            overview={filme.overview}
                            releaseDate={filme.releaseDate}
                        />))}
                </Lista>
            </ScreenContainer>
        </>
    )
}