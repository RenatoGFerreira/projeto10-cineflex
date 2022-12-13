import { ScreenContainer, TextContainer, ButtonContainer } from "./StyledSuccess"
import { Link } from "react-router-dom"

export default function Success({successBuy}) {

    console.log(successBuy)
    const { movie, date, hour, buyer, cpf, seats } = successBuy

    return (

        <ScreenContainer>
            <span>Pedido Feito com Sucesso!</span>
            <TextContainer data-test="movie-info">
                <h1>Filme e Sessão</h1>
                <p>{movie}</p>
                <p>{date}- {hour}</p>
            </TextContainer>
            <TextContainer data-test="seats-info">
                <h1>Ingressos</h1>
                {seats.map((s) => <p key={s}> Poltrona: {s}</p>)}
               
            </TextContainer>
            <TextContainer data-test="client-info">
                <h1>Comprador</h1>
                <p>Nome: {buyer}</p>
                <p>cpf: {cpf}</p>
            </TextContainer>
            <ButtonContainer>
                <Link to="/" data-test="go-home-btn">
                    <button>Voltar para Home</button>
                </Link>
            </ButtonContainer>
        </ScreenContainer>
    )
}