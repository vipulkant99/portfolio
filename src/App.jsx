import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "./screens/Loading/LoadingPage";
import Home from "./screens/Home/Home";
import { DarkModeProvider } from "./screens/Home/hook/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
