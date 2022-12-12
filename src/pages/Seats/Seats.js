import { ScreenContainer, SeatsSpace, CircleContainer, Form, Circle, IndividualCircle, Carregando } from "./StyledSeats";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeatsCard from "../../components/SeatsCard/SeatsCard";


export default function Seats() {

    const { idSessao } = useParams()
    const [session, setSession] = useState(null)
    const [selecionados, setSelecionados] = useState([])
    const [form, setForm] = useState({ name: "", cpf: "" })
    const navigate = useNavigate()


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


    function formulary(event) {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    function buyerTickets(event) {

        event.preventDefault()

        const body = {
            ids: selecionados.map(s => s.id),
            ...form
        }

        console.log(body)

        const promise = axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`)

        promise.then(res => {
            console.log("SUcesso querido")
            navigate("/sucesso")
        })
        promise.catch(err => console.log(err.response.data))


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
                <input
                    name="name"
                    value={form.name}
                    onChange={formulary}
                    placeholder="Digite seu nome"
                    type="text"
                />

                CPF do Comprador:
                <input
                    name="cpf"
                    value={form.cpf}
                    onChange={formulary}
                    placeholder="Digite seu CPF"
                    type="number"
                />
                <button type="submit">Reservar Assento(s)</button>
            </Form>

            <Footer movie={filme} />
        </ScreenContainer>
    )
}