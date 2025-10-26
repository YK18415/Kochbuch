import { useParams, useNavigate } from 'react-router-dom'

export default function Recipe() {

    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    return(
        <div>
            <h1>Test: {id}</h1>
            <button onClick={() => navigate(-1)}>Zurück</button>
        </div>
    )
}