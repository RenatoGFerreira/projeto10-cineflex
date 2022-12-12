import { ScreenContainer, SeatsSpace, Form, CircleContainer, Circle, IndividualCircle, Carregando } from "./StyledSeats";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeatsCard from "../../components/SeatsCard/SeatsCard";


export default function Seats() {

    const { idSessao } = useParams()
    const [session, setSession] = useState(null)
    const [selecionados, setSelecionados] = useState([])
    const [form, setForm] = useState({ name: "", cpf: "" })


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then(res => setSession(res.data))
        promise.catch(err => console.log(err.response.data))

    }, [idSessao])

    function addSelecionados(seat) {
        if (seat.isAvailable === false) {
            alert("Esse assento não está disponível")
        } else {
            const inList = selecionados.some(s => seat.id === s.id)

            if (inList) {
                const newList = selecionados.filter(s => seat.id !== s.id)
                setSelecionados(newList)
            } else {
                setSelecionados([...selecionados, seat])
            }
        }
    }

   
    if (!session) {
        return <Carregando>Carregando...</Carregando>
    }


    function formulary(event){
        const {name, value} = event.target
        setForm({...form, [name]:value})
    }

    function buyerTickets(event){
        alert("foi")
        event.preventDefault()
        console.log(selecionados)

        const body = {
            ids: selecionados.map((s) => s.id),
            ...form
        }  

        console.log(body)

    }

    const filme = {
        posterURL: "poster",
        title: "title",
        weekday: "weekday",
        hour: "hour"
    }

    return (
        <ScreenContainer>
            <h1>selecione os assentos</h1>
            <SeatsSpace>
                {session.seats.map(
                    (seat) => <SeatsCard
                        seat={seat}
                        key={seat.id}
                        addSelecionados={addSelecionados}
                        selecionados={selecionados.some(s => seat.id === s.id)}
                    />
                )}
            </SeatsSpace>
            <CircleContainer>
                <IndividualCircle>
                    <Circle status={"selected"} />
                    Selecionado
                </IndividualCircle>
                <IndividualCircle>
                    <Circle status={"available"} />
                    Disponível
                </IndividualCircle>
                <IndividualCircle>
                    <Circle status={"unavailable"} />
                    Indisponível
                </IndividualCircle>
            </CircleContainer>

            <Form onSubmit={buyerTickets}>
                Nome do Comprador:
                <input name="name" placeholder="Digite o seu nome" type="text" value={form.name} onChange={formulary} />
                CPF do Comprador:
                <input name="cpf" placeholder="Digite o seu cpf" type="number" value={form.cpf} onChange={formulary} />
                <button type="submit">Reservar assentos</button>
            </Form>

            <Footer movie={filme} />
        </ScreenContainer>
    )
}