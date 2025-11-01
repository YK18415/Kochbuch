import { useParams, useNavigate } from 'react-router-dom'
import "./Recipe.css"

interface Recipe {
  id: number
  title: string
  time: number // besser als string, damit man sortieren kann!
  description: string
  ingredients?: string
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

    const ingredientList = recipe.ingredients
        ? recipe.ingredients.split(",").map((item) => item.trim())
        : [];

    return(
        <div className="recipe-page">
      <div className="recipe-header">
        <h1 className="recipe-title">{recipe.title}</h1>
        <p className="recipe-time">⏱️ {recipe.time} Minuten</p>
      </div>

      <div className="recipe-content">
        {/* Zutaten-Card */}
        <div className="recipe-detail-card ingredients-card">
          <h2 className="section-title">🧂 Zutaten</h2>
          <ul className="ingredients-list">
            {ingredientList.length > 0 ? (
              ingredientList.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <li>Keine Zutaten angegeben.</li>
            )}
          </ul>
        </div>

        {/* Beschreibung-Card */}
        <div className="recipe-detail-card description-card">
          <h2 className="section-title">👨‍🍳 Zubereitung</h2>
          <p className="recipe-description">
            {recipe.description.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Zurück
      </button>
    </div>
    )
}