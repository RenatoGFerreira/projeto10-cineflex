import { useEffect, useState } from "react"
import { SeatsCard } from "./StyledSeatsCard"

export default function SeatsCine({ seat, addSelecionados, selecionados }) {

    const [status, setStatus] = useState("unavailable")

    useEffect(() => {
        if(seat.isAvailable){
            setStatus("available")
        }else if(selecionados){
            setStatus("selected")
        }else{
            setStatus("unavailable")
        }
    }, [selecionados])

    return (
        <SeatsCard onClick={() => addSelecionados(seat)} status={status}>
            {seat.name}
        </SeatsCard>
    )
}
