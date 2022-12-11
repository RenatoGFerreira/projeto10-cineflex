import { SeatsCard } from "./StyledSeatsCard"

export default function SeatsCine({seat}){
    
    return(
        <SeatsCard>
            {seat.name}
        </SeatsCard>
    )
}
