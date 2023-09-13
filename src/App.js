import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Confirmation from "./pages/Confirmation";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Confirmation" element={<Confirmation />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
