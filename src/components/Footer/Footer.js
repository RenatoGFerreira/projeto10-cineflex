import { ScreenContainer, Poster, Title } from "./StyleFooter"

export default function Footer({ title, poster, weekday, hour}){

    return(
        <ScreenContainer data-test="footer">
            <Poster>
                <img  src={poster} alt={`Poster do filme ${title}`}/>
            </Poster>
            <Title>
            <p>{title}</p>
            <p>{weekday} - {hour}</p>
            </Title>    
        </ScreenContainer>
    )
}