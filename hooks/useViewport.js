import { useState, useEffect } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState(1080);

  useEffect(() => {
    const handleResize = () => setViewport(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  return viewport;
};

export default useViewport;
