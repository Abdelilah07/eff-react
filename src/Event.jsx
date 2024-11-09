
const Event = ({ expert }) => {
    return (
        <>
            <div className="overflow-x-auto shadow-lg rounded-lg  border-2 border-gray-500">
                <table className="table w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2">Theme</th>
                            <th className="px-4 py-2">Date début</th>
                            <th className="px-4 py-2">Date fin</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Côut journalier</th>
                            <th className="px-4 py-2">Durée</th>
                            <th className="px-4 py-2">Côut total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expert.evenements.map((event) => (
                            <tr key={event.theme} className="hover:bg-gray-100">
                                <td className="px-4 py-2">{event.theme}</td>
                                <td className="px-4 py-2">{event.date_debut}</td>
                                <td className="px-4 py-2">{event.date_fin}</td>
                                <td className="px-4 py-2">{event.description}</td>
                                <td className="px-4 py-2">{event.cout_journalier}</td>
                                <td className="px-4 py-2">{event.duree}</td>
                                <td className="px-4 py-2">{event.cout_journalier * event.duree}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-100 font-bold">
                        <tr>
                            <td colSpan="6" className="px-4 py-2">Total</td>
                            <td className="px-4 py-2">{expert.evenements.reduce((total, event) => total + event.cout_journalier * event.duree, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default Event

