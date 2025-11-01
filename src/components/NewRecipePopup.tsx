import { useState } from "react";
import "./NewRecipePopup.css"
import { createClient } from "@supabase/supabase-js";

interface NewRecipePopupProps {
    onClose: () => void;
    onSaved: () => void;
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)

export default function NewRecipePopup({onClose, onSaved}: NewRecipePopupProps) {
    const [title, setTitle] = useState("");
    const [time, setTime] = useState<number>(0);
    const [description, setDescription] = useState("");

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        
        // Neues Rezept-Objekt
        const newRecipe = {
            title,
            time,
            description
        }

        // In Supabase speichern
        const { error } = await supabase.from("Recipe").insert([newRecipe])

        if (error) {
            console.error("Fehler beim Speichern:", error.message)
            alert("Fehler beim Speichern.")
        } else {
            alert("Rezept erfolgreich gespeichert!")
            onSaved(); // Daten reloaden für RecipeList.
            onClose() // Popup schließen
        }
    };

    return(
        <div className="popup-overlay" onClick={onClose}> {/* OnClose wird hier nicht aufgerufen, die Komponente sagt hier Aufrufer/RecipeList.tsx "Ich möchte geschlossen werden.". */}
            <div className="popup" onClick={(e) => e.stopPropagation()}> {/* Sorgt dafür, dass onClose nicht aufgerufen wird, wenn man in das Popup klickt. */}
                <h2>Neues Rezept hinzufügen</h2>

                <form onSubmit={onSubmit} className="popup-form">
                    <label>Titel:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>Zeit::
                        <input
                            type="number"
                            value={time}
                            onChange={(e) => setTime(Number(e.target.value))}
                            required
                        />
                    </label>
                    <label>Beschreibung:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>

                    <div className="popup-buttons-wrapper">
                        <button className="popup-buttons" onClick={onSubmit}>Speichern</button>
                        <button className="popup-buttons" onClick={onClose}>Schließen</button>
                    </div>
                </form>
            </div>
        </div>
    )
}