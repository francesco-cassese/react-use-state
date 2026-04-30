import Card from "./components/Card.jsx";
import languages from "./data/languages.js";

function App() {
  console.log(languages);

  return (
    <Card listLanguages={languages} />
  );
}
export default App;