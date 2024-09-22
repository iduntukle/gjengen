"use client"

import { useState } from "react"

export default function slayerPicker(){
    const slayers = ["Idun", "Ane", "Julie", "Johanne", "Stine", "Madelen", "Hanna", "Hedda", "Marie", "Lina"];
    const [slayer, setSlayer] = useState("Idun");
    const [showSlayer, setShowSlayer] = useState(false);

    function pickNextSlayer(){
        const nextSlayerIndex =Math.floor(Math.random() * slayers.length);
        setSlayer(slayers[nextSlayerIndex]);
    }

    function handleClick(): void {
        pickNextSlayer();
        setShowSlayer(true);
    }

    return(
        <>
        <h1>Slayervlogs er gjengen sin måte å få et innblikk 
            i hverandre sin hverdag selv om vi er langt borte fra hverandre!
        </h1>
        <button onClick={handleClick}>trykk her for å finne neste slayer!</button>
        {showSlayer &&
        <h1>{slayer}</h1> }
        </>
    )
}