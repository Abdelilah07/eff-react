import Event from "./Event"

function Expert({ expert }) {
    return (
        <li className="mb-4">
            <h2 className="text-2xl font-bold mb-2">{expert.nom_complet}</h2>
            <Event expert={expert} />
        </li>
    );
}

export default Expert