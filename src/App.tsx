import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'
import Recipe from './components/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<RecipeList />} />
          <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
