import { ScreenContainer, Poster, Title } from "./StyleFooter"

export default function Footer({movie}){
    const {posterURL, title, weekday, hour} = movie
    return(
        <ScreenContainer>
            <Poster>
                <img src={posterURL} alt={`Poster do filme ${posterURL}`}/>
            </Poster>
            <Title>
            <p>{title}</p>
                {weekday && hour && <p>{weekday} - {hour}</p>}
            </Title>
        </ScreenContainer>
    )
}