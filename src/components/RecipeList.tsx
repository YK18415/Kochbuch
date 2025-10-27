import './RecipeList.css'
import RecipeCard from './RecipeCard'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface Recipe {
  id: number
  title: string
  time: number // besser als string, damit man sortieren kann!
  description: string
}

export default function RecipeList() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const recipes: Recipe[] = [
    { id: 1, title: 'Nudeln mit Gemüsesauce', time: 45, description: 'Leckere Nudeln mit frischem Gemüse' },
    { id: 2, title: 'Kartoffelsuppe', time: 30, description: 'Hausgemachte Kartoffelsuppe' },
    { id: 3, title: 'Pfannkuchen', time: 20, description: 'Schnell und fluffig' },
    { id: 4, title: 'Lasagne', time: 60, description: 'Klassiker mit Béchamelsoße' },
    { id: 5, title: 'Curry mit Reis', time: 50, description: 'Indisches Curry mit Basmatireis' },
    { id: 6, title: 'Tomatensalat', time: 10, description: 'Erfrischend leicht' },
    { id: 7, title: 'Tomatensalat', time: 10, description: 'Erfrischend leicht' },
    { id: 8, title: 'Tomatensalat', time: 10, description: 'Erfrischend leicht' }
  ]

  // Sortiere Rezepte nach ausgewählter Reihenfolge
  const sortedRecipes = [...recipes].sort((a, b) =>
    sortOrder === 'asc' ? a.time - b.time : b.time - a.time
  )

  return (
    <div className="main-page">
      {/* Sortierzeile */}
      <div className="filter-bar">
        <label htmlFor="sort">Sortieren nach Zeit:</label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
        >
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
    </div>
  )
}