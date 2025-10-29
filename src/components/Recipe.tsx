import { useParams, useNavigate } from 'react-router-dom'
import "./Recipe.css"

interface Recipe {
  id: number
  title: string
  time: number // besser als string, damit man sortieren kann!
  description: string
}

interface RecipeProps {
    recipes: Recipe[]
}

export default function Recipe({ recipes }: RecipeProps) {
    const navigate = useNavigate()
    const { id } = useParams<{id: string}>();

    // Falls recipes leer ist (weil noch nicht geladen)
    if (!recipes || recipes.length === 0) {
        return <p>Lade Rezeptdaten...</p>;
    }
    const recipe = recipes.find(r => r.id === Number(id));

    if (!recipe) {
        return <p>Rezept nicht gefunden.</p>;
    }

    return(
        <div className='content'>
            <h2>{recipe.title}</h2>
            <h3>Zeit: {recipe.time} min</h3>
            <p>{recipe.description}</p>
            <button onClick={() => navigate(-1)}>Zurück</button>
        </div>
    )
}