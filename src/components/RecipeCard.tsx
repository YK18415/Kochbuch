import './RecipeCard.css'

export default function RecipeCard(props: any) {
    return (
        
            <div className="recipe-card">
                <h2>Nudeln mit Gemüsesauce</h2>
                <h3>Rezeptnummer: {props.num}</h3>
            </div>
    )
}