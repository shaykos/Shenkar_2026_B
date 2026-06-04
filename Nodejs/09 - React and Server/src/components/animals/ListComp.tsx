
import { useState, useEffect } from 'react';

export default function ListComp() {

    const [animals, setAnimals] = useState([]);

    const fetchAnimals = async () => {
        try {
            const response = await fetch('https://zoo-keeper-wugw.onrender.com/api/animals/list');
            const json = await response.json();
            console.log('Fetched animals:', json);
            if (json.success) {
                setAnimals(json.data);
            }
        } catch (error) {
            console.error('Error fetching animals:', error);
        }
    }

    useEffect(() => {
        fetchAnimals();
    }, []);

    return (
        <section className="animals-section">
            <h2>Animals List</h2>
            {
                animals.length == 0 ? <p className="muted">Loading animals...</p> :
                    <div className="animals-grid">
                        {animals.map((animal: any) => {
                            return <article className="animal-card" key={animal._id}>
                                <div className="animal-image-wrap">
                                    <img className="animal-image" src={animal.imageUrl} alt={animal.name} />
                                </div>
                                <h3>{animal.name}</h3>
                                <p>Species: {animal.species}</p>
                                <p>Age: {animal.age}</p>
                                <p>Habitat: {animal.habitat}</p>
                            </article>
                        })}
                    </div>
            }
        </section>
    );

}