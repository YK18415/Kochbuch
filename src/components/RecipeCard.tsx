import './RecipeCard.css'

interface Recipe {
    id: number
    title: string
    time: number
    description: string
}

interface RecipeProps {
    recipe: Recipe
}

export default function RecipeCard({recipe}: RecipeProps) {
    return (
        
            <div className="recipe-card">
                <h2>{recipe.title}</h2>
                <h3>Rezeptnummer: {recipe.id}</h3>
                <h4>Zeit: {recipe.time}</h4>
            </div>
    )
}