import './RecipeList.css'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import NewRecipePopup from './NewRecipePopup';


interface Recipe {
  id: number
  title: string
  time: number // besser als string, damit man sortieren kann!
  description: string
}

interface RecipeProps {
    recipes: Recipe[]
}

export default function RecipeList({ recipes }: RecipeProps) {
  const [showNewRecipePopup, setShowNewRecipePopup] = useState<Boolean>(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none')


  // Sortiere Rezepte nach ausgewählter Reihenfolge
  const sortedRecipes = sortOrder === 'none' ? recipes : 
    [...recipes].sort((a, b) =>
      sortOrder === 'asc' ? a.time - b.time : b.time - a.time
    );

  return (
    <div className="main-page">
      {/* Sortierzeile */}
      <div className="filter-bar">
        <label htmlFor="sort">Sortieren nach Zeit:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc' | 'none')}
        >
          <option value="none">Bitte wählen</option>
          <option value="asc">Aufsteigend</option>
          <option value="desc">Absteigend</option>
        </select>
      </div>

      {/* Cards */}
      <div className="recipe-list-wrapper">
        <div className="recipe-list">
          {sortedRecipes.map((recipe) => (
            <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="recipe-link">
              <RecipeCard recipe={recipe} />
            </Link>
          ))}
        </div>
      </div>

      {/* Rezept hinzufügen */}
      <div className='btnAddRecipe-wrapper'>
          <button className='btnAddRecipe' onClick={() => setShowNewRecipePopup(true)} >Neues Rezept hinzufügen</button>
      </div>

      {
      showNewRecipePopup && (
        <NewRecipePopup onClose={() => setShowNewRecipePopup(false)} />
      )
    }
    </div>
  )
}