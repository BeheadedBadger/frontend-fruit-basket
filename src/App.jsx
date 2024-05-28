import './App.css'
import React from "react";

function App() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [postalCode, setPostalCode] = React.useState("");

    const [comments, setComments] = React.useState("");
    const [termsOfService, toggleTermsOfService] = React.useState(false);

    const [bananas, setBananas] = React.useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <div className="fruit-card">
                <p>Bananen 🍌</p>
                <div className="plusminus"><button onClick={() => setBananas(bananas && (bananas - 1))}>-</button>
                <field><p>{bananas}</p></field>
                <button onClick={() => setBananas(bananas + 1)}>+</button>
                </div>
            </div>

            <form>
                <h1>Details: </h1>
                <div className="form-field">
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" id="firstname" name="firstname" value={firstName}
                           onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label htmlFor="lastname">Surname:</label>
                    <input type="text" id="lastname" name="lastname" value={lastName}
                           onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label className="form-field" htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>

                <div className="form-field">
                    <label htmlFor="postalcode">Postal code:</label>
                    <input type="text" id="postalcode" name="postalcode" value={postalCode}
                           onChange={(e) => setPostalCode(e.target.value)}/>
                </div>

                {/* TODO: >Select box
                TODO: Radio buttons*/}

                <label htmlFor="comments">Comments:</label>
                <textarea rows="20" cols="100" id="comments" name="comments" value={comments}
                          onChange={(e) => setComments(e.target.value)}/>
                <div className="form-field">
                    <label className="form-field" htmlFor="termofservice">Do you agree to the terms of service?:</label>
                    <input type="checkbox" id="termofservice" name="termofservice" value={termsOfService}
                           onClick={() => toggleTermsOfService(!termsOfService)}/>
                </div>

                <label className="form-field" htmlFor="submit"></label>
                <input className="Button" type="button" id="submit" name="submit" value="Submit"
                       onClick={() => {
                           console.log("Order = " + "Bananas: " + bananas + "\n" +
                               "Name:" + firstName + " " + lastName + " Age:" + age + " Agrees to terms of service=" + termsOfService + "\n"
                               + "Comments: " + comments)
                       }}/>
            </form>
        </>
    )
}

export default App
