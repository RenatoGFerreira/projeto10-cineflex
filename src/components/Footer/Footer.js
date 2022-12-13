import { ScreenContainer, Poster, Title } from "./StyleFooter"

export default function Footer({ title, poster, weekday, hour}){

    return(
        <ScreenContainer >
            <Poster>
                <img data-test="footer" src={poster} alt={`Poster do filme ${title}`}/>
            </Poster>
            <Title>
            <p data-test="footer">{title}</p>
            <p data-test="footer">{weekday} - {hour}</p>
            </Title>    
        </ScreenContainer>
    )
}