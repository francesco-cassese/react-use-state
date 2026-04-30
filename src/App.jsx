import Button from "./components/Buttons.jsx";
import Card from "./components/Cards.jsx";
import languages from "./data/languages.js";

function App() {
  return <>
    <header>
      <h1 className="m-4">Learn Web Development</h1>
    </header>
    <main>
      <div className="container">
        <ul className="list-group list-group-horizontal list-unstyled mb-2">
          <Button listLanguages={languages} />
        </ul>
        <Card listLanguages={languages} />
      </div>
    </main>
  </>
}
export default App;