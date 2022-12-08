import { ScreenContainer, PosterMovie } from "./StyledMovieCard"

export default function MovieCard({posterURL, title}){
    return(
        <ScreenContainer>
            <PosterMovie src={posterURL} alt={`Capa do Filme ${title}`}/>
        </ScreenContainer>
    )
}

