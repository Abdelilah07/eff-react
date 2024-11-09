import { useState } from "react"

function ExpertForm({ onAdd }) {

    const [newEvent, setNewEvent] = useState({
        theme: "",
        date_debut: "",
        date_fin: "",
        cout: 0,
        expert: ""
    });

    const [showResult, setShowResult] = useState(false)

    const handleChange = (event) => {
        setNewEvent({
            ...newEvent,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowResult(true);
    }

    return (
        <>
            <form
                className="shadow-md rounded-lg p-8 w-[30rem] mx-auto"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center mb-4">Formulaire de l'evenement</h2>
                <div className="space-y-6">
                    <div className="flex flex-col">
                        <label htmlFor="theme" className="text-xl">Theme</label>
                        <input type="text" name="theme" id="theme" value={newEvent.theme} onChange={handleChange} className="p-2 border-2 rounded-lg outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="date_debut" className="text-xl">Date début</label>
                        <input type="date" name="date_debut" id="date_debut" value={newEvent.date_debut} onChange={handleChange} className="p-2 border-2 rounded-lg outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="date_fin" className="text-xl">Date fin</label>
                        <input type="date" name="date_fin" id="date_fin" value={newEvent.date_fin} onChange={handleChange} className="p-2 border-2 rounded-lg outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="cout" className="text-xl">Cout</label>
                        <input type="number" name="cout" id="cout" value={newEvent.cout} onChange={handleChange} className="p-2 border-2 rounded-lg outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="expert" className="text-xl">Expert</label>
                        <input type="text" name="expert" id="expert" value={newEvent.expert} onChange={handleChange} className="p-2 border-2 rounded-lg outline-none" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Confirm</button>
                </div>
            </form>
            {showResult && <div id="result" className="bg-green-100 p-4 rounded-lg mt-4">
                <ul>
                    <li>L'expert : {newEvent.expert}</li>
                    <li>Le theme : {newEvent.theme}</li>
                    <li>La date de debut : {newEvent.date_debut}</li>
                    <li>La date de fin : {newEvent.date_fin}</li>
                    <li>Le cout : {newEvent.cout}</li>
                </ul>
            </div>}

        </>
    )
}

export default ExpertForm

