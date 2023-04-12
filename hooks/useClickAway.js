import { useRef, useEffect } from "react";

const useClickAway = ({ eventHandler }) => {
  const element = useRef();

  useEffect(() => {
    if (!element.current) return;

    const handleClickAway = (event) => {
      if (element.current.contains(event.target)) return;
      eventHandler();
    };

    document.addEventListener("mousedown", handleClickAway);

    return () => document.removeEventListener("mousedown", handleClickAway);
  }, [element, eventHandler]);

  return element;
};

export default useClickAway;
