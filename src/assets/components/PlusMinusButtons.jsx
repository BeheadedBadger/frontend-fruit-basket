import "./PlusMinusButtons.css"

// eslint-disable-next-line react/prop-types
function PlusMinusButtons({fruit, setFruit}) {
    return <div className="buttons">
        <button onClick={() => setFruit(fruit && (fruit - 1))}>-</button>
        <p>{fruit}</p>
        <button onClick={() => setFruit(fruit + 1)}>+</button>
    </div>
}

export default PlusMinusButtons;