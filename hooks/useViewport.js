import { useState, useEffect } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState(null);

  useEffect(() => {
    setViewport(window.innerWidth);
    const handleResize = () => setViewport(window.innerWidth);
    window.addEventListener("resize", handleResize);
  }, []);

  return viewport;
};

export default useViewport;
