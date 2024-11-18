import React from "react";
import { Box, useMediaQuery, styled } from "@mui/system";

/**
 * Styled drawer component with slide animation
 */
const StyledDrawer = styled(Box)(({ theme, open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "280px",
  height: "100%",
  backgroundColor: theme.palette.background.sideNav,
  boxShadow: theme.shadows[3],
  transform: open ? "translateX(0)" : "translateX(-100%)",
  transition: "transform 0.3s ease-in-out",
  zIndex: theme.zIndex.drawer,
  overflowY: "auto",
}));

/**
 * Backdrop component that appears behind the drawer
 */
const Backdrop = styled(Box)(({ open }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: open ? 1 : 0,
  visibility: open ? "visible" : "hidden",
  transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
  zIndex: 1200,
}));

/**
 * Mobile drawer component that slides in from the left
 * @param {Object} props - Component props
 * @param {boolean} props.open - Controls whether drawer is open
 * @param {Function} props.onClose - Handler called when drawer should close
 * @param {React.ReactNode} props.children - Content to render inside drawer
 * @returns {React.ReactElement|null} Drawer component or null if not mobile
 */
const Drawer = ({ open, onClose, children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

  if (!isMobile) return null;

  return (
    <>
      <Backdrop open={open} onClick={onClose} />
      <StyledDrawer
        role="navigation"
        aria-label="Mobile navigation drawer"
        open={open}
      >
        {children}
      </StyledDrawer>
    </>
  );
};

export default Drawer;
