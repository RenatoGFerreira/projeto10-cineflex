import { useEffect, useState } from "react"
import { SeatsCard } from "./StyledSeatsCard"

export default function SeatsCine({ seat, addSelecionados, selecionados }) {

    const [status, setStatus] = useState("unavailable")

    useEffect(() => {

        if(selecionados){
            setStatus("selected")
        }else if(seat.isAvailable){
            setStatus("available")
        }else{
            setStatus("unavailable")
        }

    }, [selecionados, seat])

    return (
        <SeatsCard onClick={() => addSelecionados(seat)} status={status}>
            {seat.name}
        </SeatsCard>
    )
}
