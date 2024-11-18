import React from "react";
import { Box, useMediaQuery } from "@mui/system";
import SideNavBar from "./SideNavBar";
import MainContainer from "./MainContainer";
import Drawer from "../components/Drawer";
import { useLayout } from "./useLayout";

/**
 * Layout component that handles the main application layout structure
 * Provides responsive layout with sidebar navigation that converts to drawer on mobile
 *
 * @component
 * @returns {React.ReactElement} Layout component with responsive sidebar/drawer and main content
 */
const Layout = () => {
  // Check if viewport is mobile size
  const isMobile = useMediaQuery("(max-width:600px)");
  // Get drawer state and handler from layout hook
  const { showDrawer, drawerHandler } = useLayout();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
      }}
    >
      {isMobile ? (
        <Drawer open={showDrawer} onClose={drawerHandler}>
          <SideNavBar />
        </Drawer>
      ) : (
        <SideNavBar />
      )}
      <MainContainer drawerHandler={drawerHandler} />
    </Box>
  );
};

export default Layout;
