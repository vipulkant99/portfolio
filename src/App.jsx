import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./screens/Loading/LoadingPage";
import Home from "./screens/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
