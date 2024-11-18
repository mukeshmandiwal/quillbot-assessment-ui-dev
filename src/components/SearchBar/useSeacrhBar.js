import { useState } from "react";

export function useSeacrhBar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  /**
   * Handles the closing animation before collapsing the search bar
   */
  const handleClick = () => {
    if (isExpanded) {
      setIsClosing(true);
      setTimeout(() => {
        setIsExpanded(false);
        setIsClosing(false);
      }, 200);
    } else {
      setIsExpanded(true);
    }
  };
  return {
    isClosing,
    handleClick,
    isExpanded,
  };
}
