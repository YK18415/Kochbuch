import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RecipeList from './components/RecipeList'
import Recipe from './components/Recipe'
import { createClient } from "@supabase/supabase-js";

interface Recipe {
  id: number
  title: string
  time: number // besser als string, damit man sortieren kann!
  description: string
}

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function App() {
  const [count, setCount] = useState(0)
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  
  // Recipes laden:
  useEffect (() => {
    getRecipes();
  }, []);

  async function getRecipes() {
    const {data, error} = await supabase.from("Recipe").select();
    if (error) {
      console.log(error);
      return;
    }
    setRecipes(data ?? []); // Wenn null, dann leeres Array
  }

  return (
      <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:id" element={<Recipe recipes={recipes}/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
