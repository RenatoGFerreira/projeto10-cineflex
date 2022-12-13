import { ScreenContainer, ButtonHorario } from "./StyleSessionCard";
import { Link } from "react-router-dom";

export default function SessionCard({ movie }) {

    const { weekday, date, showtimes } = movie
    return (
        <ScreenContainer>
            <h1 data-test="movie-day">{weekday} - {date}</h1>

            <ButtonHorario>
                {showtimes.map((i) => (
                    <Link to={`/assentos/${i.id}`} key={i.name}>
                        <button data-test="showtime">{i.name}</button>
                    </Link>
                ))}
            </ButtonHorario>
        </ScreenContainer>
    )
}