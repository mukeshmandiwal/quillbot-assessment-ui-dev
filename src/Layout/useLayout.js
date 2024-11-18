import { useState } from "react";

/**
 * Custom hook to manage the drawer state and handler in the layout
 * Provides functionality to toggle the drawer open/closed state
 *
 * @returns {Object} Object containing drawer state and toggle handler
 * @returns {boolean} showDrawer - Current state of the drawer (open/closed)
 * @returns {Function} drawerHandler - Function to toggle the drawer state
 */
export function useLayout() {
  const [showDrawer, setshowDrawer] = useState(false);
  const drawerHandler = () => {
    setshowDrawer(!showDrawer);
  };
  return {
    drawerHandler,
    showDrawer,
  };
}
