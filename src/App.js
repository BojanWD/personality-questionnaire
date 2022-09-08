import { Route, Routes } from "react-router-dom";
import NavbarAndHero from "./components/NavbarAndHero";
import Questionnaire from "./components/Questionnaire";
import About from "./page/About";
import Error from "./page/Error";

function App() {
  return (
    <>
      <NavbarAndHero />
      <Routes>
        <Route exact path="/" element={<Questionnaire />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
