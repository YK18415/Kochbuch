import { useParams, useNavigate } from 'react-router-dom'

export default function Recipe() {
    const navigate = useNavigate()

    return(
        <div>
            <h4>Zeit: 45 Minuten</h4>
            <button onClick={() => navigate(-1)}>Zurück</button>
        </div>
    )
}