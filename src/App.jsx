import Card from "./components/Card.jsx";
import languages from "./data/languages.js";

function App() {
  return (
    <Card listLanguages={languages} />
  );
}
export default App;