import { useRef, useEffect } from "react";

// hook to handle click away event for filter popover form
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
