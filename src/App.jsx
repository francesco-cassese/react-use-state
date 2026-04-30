import Buttons from "./components/Buttons.jsx";
import Cards from "./components/Cards.jsx";
import languages from "./data/languages.js";
import { useState } from "react";


function App() {
  const [active, setActive] = useState(null);
  const clickHadler = linguaggio => {
    setActive(linguaggio);
  };
  return <>
    <header>
      <h1 className="m-4">Learn Web Development</h1>
    </header>
    <main>
      <div className="container">
        <ul className="list-group list-group-horizontal list-unstyled mb-2">
          <Buttons
            listLanguages={languages}
            selected={clickHadler}
            activeId={active ? active.id : null} />
        </ul>
        <div className="mt-3">
          {active && <Cards info={active} />}
        </div>
      </div>
    </main>
  </>
}
export default App;