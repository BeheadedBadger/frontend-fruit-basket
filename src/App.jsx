import './App.css'
import React from "react";

function App() {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [postalCode, setPostalCode] = React.useState("");
    const [frequency, setFrequency] = React.useState("");
    const [timeSlot, setTimeSlot] = React.useState("");
    const [comments, setComments] = React.useState("");
    const [termsOfService, toggleTermsOfService] = React.useState(false);

    const [bananas, setBananas] = React.useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <div className="fruit-card">
                <p>Bananen 🍌</p>
                <div className="plusminus"><button onClick={() => setBananas(bananas && (bananas - 1))}>-</button>
                <p>{bananas}</p>
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

                <div className="form-field">
                    <label htmlFor="frequency">Frequency:</label>
                    <select name="frequency" id="frequency" value={frequency}
                            onChange={(e) => setFrequency(e.target.value)}>
                        <option value="every-week">Every week</option>
                        <option value="every-other-week">Every other week</option>
                        <option value="every-month">Every month</option>
                    </select>
                </div>

                <p>Time slot:</p>
                <input type="radio" id="afternoon" name="time-slot" value="afternoon" onChange={(e) => setTimeSlot(e.target.value)}/>
                <label htmlFor="afternoon">Afternoon</label>
                <input type="radio" id="evening" name="time-slot" value="evening" onChange={(e) => setTimeSlot(e.target.value)}/>
                <label htmlFor="evening">Evening</label>

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
                               + "Frequency:" + frequency + " Time slot:" + timeSlot + "\n"
                               + "Comments: " + comments)
                       }}/>
            </form>
        </>
    )
}

export default App
