import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Api() {
    const [data, setData] = useState([]); // Almacena los personajes
    const [info, setInfo] = useState({}); // Almacena la información adicional
    const url = 'https://rickandmortyapi.com/api/character';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                setData(response.data.results);
                setInfo(response.data.info); 
            } catch (error) {
                console.error('Error', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div>
            {data.map((character) => (
                <div key={character.id}>
                    <h1>{character.name}</h1>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                </div>
            ))}
        </div>
    );
}
