import { useState } from "react";

interface Animal {
    name: string;
    species: string;
    age: number;
    habitat: string;
    image: File | null;
}

export default function AddAnimalComp() {

    const [animal, setAnimal] = useState<Animal>({
        name: '',
        species: '',
        age: 0,
        habitat: '',
        image: null
    });

    const addAnimal = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("name", animal.name);
        formData.append("species", animal.species);
        // FormData מקבל רק מחרוזות או קבצים, לכן צריך להמיר את המספר למחרוזת
        formData.append("age", animal.age.toString()); 
        formData.append("habitat", animal.habitat);
        
        // מוודאים שהקובץ קיים לפני שמוסיפים אותו, כדי למנוע שגיאות
        if (animal.image) {
            formData.append("file", animal.image);
        }

        try {
            const response = await fetch("https://zoo-keeper-wugw.onrender.com/api/animals/add", {
                method: "POST",
                body: formData
            });
            const json = await response.json();
            if (json.success) {
                alert("Animal added successfully!");
                setAnimal({
                    name: '',
                    species: '',
                    age: 0,
                    habitat: '',
                    image: null
                }); // Reset form
            }
        } catch (error) {
            console.error("Error adding animal:", error);
        }
    }

    return (
        <section className="add-animal">
            <h2>Add New Animal</h2>
            <form id="addAnimalForm" className="animal-form" onSubmit={addAnimal}>
                <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required
                        onChange={(event) => setAnimal(prev => ({ ...prev, name: event.target.value }))} />
                </div>
                <div className="field">
                    <label htmlFor="species">Species:</label>
                    <input type="text" id="species" name="species" required
                        onChange={(event) => setAnimal(prev => ({ ...prev, species: event.target.value }))} />
                </div>
                <div className="field">
                    <label htmlFor="age">Age:</label>
                    {/* המרה למספר כדי להתאים לממשק ה-Animal */}
                    <input type="number" id="age" name="age" required
                        onChange={(event) => setAnimal(prev => ({ ...prev, age: Number(event.target.value) }))} />
                </div>
                <div className="field">
                    <label htmlFor="habitat">Habitat:</label>
                    <input type="text" id="habitat" name="habitat" required
                        onChange={(event) => setAnimal(prev => ({ ...prev, habitat: event.target.value }))} />
                </div>
                <div className="field">
                    <label htmlFor="imageUrl">Image URL:</label>
                    {/* טיפול בטוח במערך הקבצים */}
                    <input type="file" id="file" name="file" required
                        onChange={(event) => setAnimal(prev => ({ ...prev, image: event.target.files?.[0] || null }))} />
                </div>
                <button className="btn" type="submit">Add Animal</button>
            </form>
        </section>
    )
}