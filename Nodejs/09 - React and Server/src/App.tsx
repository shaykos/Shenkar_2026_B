import ListComp from './components/animals/ListComp';
import AddAnimalComp from './components/animals/AddAnimalComp';

export default function App() {

  return (
    <div className="app-shell">
      <header className="hero">
        <h1>ZOO</h1>
        <p>Welcome to the ZOO! We have a variety of animals for you to see. Please enjoy your visit!</p>
      </header>

      <section id="content" className="content-grid">
        <aside className="panel form-panel">
          <AddAnimalComp />
        </aside>

        <main className="panel list-panel">
          <ListComp />
        </main>
      </section>
    </div>
  )
}

