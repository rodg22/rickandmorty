import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Personajes from "./components/Pages/Personajes/Personajes";
import Ubicaciones from "./components/Pages/Ubicaciones/Ubicaciones";
import Episodios from "./components/Pages/Episodios/Episodios";
import EpisodiosDataDetail from "./components/Pages/Episodios/EpisodiosDataDetail";
import Garage from "./components/Pages/Garage/Garage";
import { ComparingProvider } from "./context/ComparingContext";
import Comparacion from "./components/Pages/CompararPersonajes/Comparacion";

const App = () => {
  return (
    <>
      <ComparingProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/personajes" element={<Personajes />} />
            <Route exact path="/comparacion" element={<Comparacion />} />
            <Route exact path="/ubicaciones" element={<Ubicaciones />} />
            <Route exact path="/episodios" element={<Episodios />} />
            <Route
              exact
              path="/episodios/:episodeId"
              element={<EpisodiosDataDetail />}
            />
            <Route exact path="/garage" element={<Garage />} />
          </Routes>
        </BrowserRouter>
      </ComparingProvider>
    </>
  );
};

export default App;
