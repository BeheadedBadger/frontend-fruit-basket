import './FruitCard.css'
import PlusMinusButtons from "./PlusMinusButtons.jsx";

// eslint-disable-next-line react/prop-types
function FruitCard({text, fruit, setFruit}) {
    return <div className="fruit-card">
        <p>{text}</p>
        <div className="plusminus">
            <PlusMinusButtons fruit={fruit} setFruit={setFruit}/>
        </div>
    </div>
}

export default FruitCard;