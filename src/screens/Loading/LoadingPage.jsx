import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Meteors } from "./Components/MeteorBackground";
import { GlitchLoader } from "../Home/Components/GlitchLoader";

function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative bg-black h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <Meteors number={100} />
      </div>

      <div className="relative z-10">
        <GlitchLoader />
      </div>
    </div>
  );
}

export default LoadingPage;
