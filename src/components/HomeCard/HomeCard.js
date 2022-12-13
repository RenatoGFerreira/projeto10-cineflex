import { ScreenContainer, PosterMovie } from "./StyledHomeCard"

export default function MovieCard({posterURL, title}){
    return(
        <ScreenContainer>
            <PosterMovie data-test="movie" src={posterURL} alt={`Capa do Filme ${title}`}/>
        </ScreenContainer>
    )
}

