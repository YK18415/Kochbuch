import './RecipeList.css'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom'

export default function RecipeList() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  return (
    <div className="recipe-list-wrapper">
      <div className="recipe-list">
        {numbers.map(num => (
          <Link to={`/recipe/${num}`} key={num} className="recipe-link">
            <RecipeCard num={num} />
          </Link>
        ))}
      </div>
    </div>
  )
}