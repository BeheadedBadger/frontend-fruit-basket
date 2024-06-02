import "./ButtonSendReset.css"

// eslint-disable-next-line react/prop-types
function ButtonSendReset({text, onclick}) {
    return <button type="button" className="resetsend" onClick={onclick}>
        <p>{text}</p>
    </button>
}

export default ButtonSendReset;