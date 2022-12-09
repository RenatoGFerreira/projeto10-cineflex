import { ScreenContainer, Lista, Carregando } from "./StyledHome"
import { useEffect, useState } from "react"
import { URL } from "../../constants/URL"
import axios from "axios"
import HomeCard from "../../components/HomeCard/HomeCard"
import { Link } from "react-router-dom"

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
                <h1>selecione o filme</h1>
                <Lista>
                    {movie.map((filme) => (
                        <Link to={`/sessoes/${filme.id}`} key={filme.id}>
                            <HomeCard
                            title={filme.title}
                            posterURL={filme.posterURL}
                        />
                        </Link>
                        ))
                    }
                </Lista>
            </ScreenContainer>
        </>
    )
}