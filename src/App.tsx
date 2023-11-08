import { Route, BrowserRouter, Routes } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
