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
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0">
        <Meteors number={window.innerWidth < 640 ? 30 : 100} />
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        <GlitchLoader />
      </div>
    </div>
  );
}

export default LoadingPage;
