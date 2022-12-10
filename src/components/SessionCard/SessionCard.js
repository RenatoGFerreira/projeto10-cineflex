import { ScreenContainer, ButtonHorario } from "./StyleSessionCard";
import { Link } from "react-router-dom";

export default function SessionCard({ movie }) {

    const { weekday, date, showtimes } = movie
    return (
        <ScreenContainer>
            <h1>{weekday} - {date}</h1>

            <ButtonHorario>
                {showtimes.map((i) => (
                    <Link to={`/assentos/${i.id}`} key={i.name}>
                        <button>{i.name}</button>
                    </Link>
                ))}
            </ButtonHorario>
        </ScreenContainer>
    )
}