import { ScreenContainer, TextContainer, ButtonContainer } from "./StyledSuccess"
import { Link } from "react-router-dom"

export default function Success({successBuy}) {

    console.log(successBuy)
    const { movie, date, hour, buyer, cpf, seats } = successBuy

    return (

        <ScreenContainer>
            <span>Pedido Feito com Sucesso!</span>
            <TextContainer >
                <h1>Filme e Sessão</h1>
                <p data-test="movie-info">{movie}</p>
                <p data-test="movie-info">{date}- {hour}</p>
            </TextContainer>
            <TextContainer >
                <h1>Ingressos</h1>
                {seats.map((s) => <p key={s} data-test="seats-info"> Poltrona: {s}</p>)}
               
            </TextContainer>
            <TextContainer>
                <h1>Comprador</h1>
                <p data-test="client-info">Nome: {buyer}</p>
                <p data-test="client-info">cpf: {cpf}</p>
            </TextContainer>
            <ButtonContainer>
                <Link to="/" >
                    <button data-test="go-home-btn">Voltar para Home</button>
                </Link>
            </ButtonContainer>
        </ScreenContainer>
    )
}