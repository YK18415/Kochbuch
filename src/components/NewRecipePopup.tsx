import "./NewRecipePopup.css"

interface NewRecipePopupProps {
    onClose: () => void;
}

export default function NewRecipePopup({onClose}: NewRecipePopupProps) {

    return(
        <div className="popup-overlay" onClick={onClose}> {/* OnClose wird hier nicht aufgerufen, die Komponente sagt hier Aufrufer/RecipeList.tsx "Ich möchte geschlossen werden.". */}
            <div className="popup" onClick={(e) => e.stopPropagation()}> {/* Sorgt dafür, dass onClose nicht aufgerufen wird, wenn man in das Popup klickt. */}
                <h2>Hallo</h2>
            </div>
        </div>
    )
}