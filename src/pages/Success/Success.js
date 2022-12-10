import { ScreenContainer } from "./StyledSuccess"
import { Link } from "react-router-dom"

export default function Success() {
    return (
        <ScreenContainer>
            <Link to="/">
                <button>Voltar para Home</button>
            </Link>
        </ScreenContainer>
    )
}