import { ScreenContainer, ButtonHorario } from "./StyleSessionCard";

export default function SessionCard({ movie }) {

    const { weekday, date, showtimes } = movie
    return (
        <ScreenContainer>
            {weekday} - {date}

            <ButtonHorario>
                {showtimes.map((i) => <button key={i.id}>{i.name}</button>)}
            </ButtonHorario>
        </ScreenContainer>
    )
}