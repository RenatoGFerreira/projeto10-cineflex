import { ScreenContainer, PosterMovie } from "./StyledHomeCard"

export default function MovieCard({posterURL, title}){
    return(
        <ScreenContainer>
            <PosterMovie src={posterURL} alt={`Capa do Filme ${title}`}/>
        </ScreenContainer>
    )
}

