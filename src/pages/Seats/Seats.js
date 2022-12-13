import { ScreenContainer, SeatsSpace, CircleContainer, Form, Circle, IndividualCircle, Carregando } from "./StyledSeats";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SeatsCard from "../../components/SeatsCard/SeatsCard";


export default function Seats({setSuccessBuy}) {

    const { idSessao } = useParams()
    const [session, setSession] = useState(null)
    const [selecionados, setSelecionados] = useState([])
    const [form, setForm] = useState({ name: "", cpf: "" })
    const navigate = useNavigate()


    function formulary(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function buyerTickets() {
        const body = {
            ids: selecionados.map(s => s.id),
            name: form.name,
            cpf: form.cpf
        }

        const sucessoDaCompra = {
            movie: session.movie.title,
            date: session.day.date,
            hour: session.name,
            buyer: body.name,
            cpf: body.cpf,
            seats: selecionados.map(s => s.name)
        }

        axios.post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, body)
                    .then( res=>{
                        console.log("Sucesso meu querido")
                        navigate("/sucesso")
                        setSuccessBuy(sucessoDaCompra)
                    })
                    .catch(err => console.log(err.response.data))
    }
    

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

    

    const filme = {
        posterURL: "poster",
        title: "title",
        weekday: "weekday",
        hour: "hour"
    }

    console.log(session)

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
                        data-test="seat"
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

                <label> Nome do Comprador:
                <input type="text" name="name" value={form.name} onChange={formulary} placeholder="Digite seu nome" data-test="client-name"/>
                </label>
                <label> CPF do Comprador:
                <input type="number" name="cpf" value={form.cpf} onChange={formulary} placeholder="Digite seu cpf" data-test="client-cpf"/>
                </label>

                <button onClick={()=>{buyerTickets()}} type="submit" data-test="book-seat-btn">Reservar Assentos</button>
            </Form>

            <Footer title={session.movie.title} poster={session.movie.posterURL} weekday={session.day.weekday} hour={session.name} />
        </ScreenContainer>
    )
}

