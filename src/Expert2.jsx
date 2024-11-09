import axios from "axios";
import { useEffect, useState } from "react";
import Expert1 from "./Expert1";

function Expert2() {

    const URL = "https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/YTcx9hbt";

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(URL)
            .then((response) => {
                setData(response.data.expertsData);
            })
        }, []);


    return (
        <>
            {data.map((expert) => (
                <Expert1 key={expert.id} expert={expert} />
            ))}
        </>
    )
}

export default Expert2