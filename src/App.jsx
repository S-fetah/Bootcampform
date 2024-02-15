import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./assets/Pages/Form";
import Home from "./assets/Pages/Home";
import Signedup from "./assets/Pages/Signedup";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/SignedUP" element={<Signedup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
