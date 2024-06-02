import './App.css'
import React from "react";
import FruitCard from "./assets/components/FruitCard.jsx";
import ButtonSendReset from "./assets/components/ButtonSendReset.jsx";

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
    const [strawberries, setStrawberries] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwis, setKiwis] = React.useState(0);



    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <div className="order-card">
                <FruitCard text="🍌 Bananas" fruit={bananas} setFruit={setBananas}/>
                <FruitCard text="🍓 Strawberries" fruit={strawberries} setFruit={setStrawberries}/>
                <FruitCard text="🍏 Apples" fruit={apples} setFruit={setApples}/>
                <FruitCard text="🥝 Kiwis" fruit={kiwis} setFruit={setKiwis}/>

                <ButtonSendReset text="Reset" onclick={() => {setBananas(0); setStrawberries(0); setApples(0); setKiwis(0)}}/>
            </div>

            <form className="form-card">
                <h2>Details: </h2>
                <div className="forms">
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
                        <label htmlFor="age">Age:</label>
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

                    <div className="form-field">
                        <p>Time slot:</p>
                        <input type="radio" id="afternoon" name="time-slot" value="afternoon"
                               onChange={(e) => setTimeSlot(e.target.value)}/>
                        <label htmlFor="afternoon">Afternoon</label>
                        <input type="radio" id="evening" name="time-slot" value="evening"
                               onChange={(e) => setTimeSlot(e.target.value)}/>
                        <label htmlFor="evening">Evening</label>
                    </div>

                    <div className="comments">
                        <label htmlFor="comments">Comments:</label>
                        <textarea rows="20" cols="100" id="comments" name="comments" value={comments}
                                  onChange={(e) => setComments(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <input type="checkbox" id="termofservice" name="termofservice" value={termsOfService}
                               onClick={() => toggleTermsOfService(!termsOfService)}/>
                        <label htmlFor="termofservice">Do you agree to the terms of
                            service?:</label>
                    </div>
                </div>

                <ButtonSendReset text="Send" onclick={() => {
                    console.log("Order = " + "Bananas: " + bananas + "\n" +
                        "Strawberries: " + strawberries + "\n" +
                        "Apples: " + apples + "\n" +
                        "Kiwis: " + kiwis + "\n" +
                        "Name:" + firstName + " " + lastName + " Age:" + age + " Agrees to terms of service=" + termsOfService + "\n"
                        + "Frequency:" + frequency + " Time slot:" + timeSlot + "\n"
                        + "Comments: " + comments)
                }}/>

                {/*
                <label className="form-field" htmlFor="submit"></label>
                <input className="Button" type="button" id="submit" name="submit" value="Submit"
                       onClick={() => {
                           console.log("Order = " + "Bananas: " + bananas + "\n" +
                               "Strawberries: " + strawberries + "\n" +
                               "Apples: " + apples + "\n" +
                               "Kiwis: " + kiwis + "\n" +
                               "Name:" + firstName + " " + lastName + " Age:" + age + " Agrees to terms of service=" + termsOfService + "\n"
                               + "Frequency:" + frequency + " Time slot:" + timeSlot + "\n"
                               + "Comments: " + comments)
                       }}/>*/}
            </form>
        </>
    )
}

export default App
