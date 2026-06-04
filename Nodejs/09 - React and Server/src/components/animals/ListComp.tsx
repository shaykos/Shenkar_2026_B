
import { useState, useEffect } from 'react';

export default function ListComp() {

    const [animals, setAnimals] = useState([]);

    const fetchAnimals = async () => {
        try {
            const response = await fetch('https://zoo-keeper-wugw.onrender.com/api/animals/list');
            const data = await response.json();
            console.log('Fetched animals:', data);
            setAnimals(data);
        } catch (error) {
            console.error('Error fetching animals:', error);
        }
    }

    useEffect(() => {
        fetchAnimals();
    }, []);

    return (
        <section>
            <h2>Animals List</h2>

        </section>
    );

}