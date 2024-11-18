import React from "react";
import { Box, useMediaQuery } from "@mui/system";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchBar from "../SearchBar";
import { useTheme } from "../../context/ThemeProvider";

/**
 * Header component that displays the top navigation bar
 * @param {Object} props - Component props
 * @param {Array} props.listData - Array of movie data to be searched
 * @param {Function} props.onChangeHandler - Handler function for search input changes
 * @param {Function} props.restHanlder - Handler function to reset search
 * @param {Function} props.drawerHandler - Handler function to toggle mobile drawer
 * @returns {React.ReactElement} Header component
 */
const Header = ({
  listData,
  onChangeHandler,
  restHanlder,
  drawerHandler,
  selectedItem,
}) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { updateTheme, themeType } = useTheme();

  /**
   * Toggles between light and dark theme
   */
  const handleThemeToggle = () => {
    updateTheme(themeType === "dark" ? "light" : "dark");
  };

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: isMobile ? "0px" : "40px",
        padding: isMobile ? "20px" : "0",
        width: "100%",
      }}
      role="banner"
      aria-label="Site header"
    >
      {isMobile && (
        <MenuIcon
          onClick={drawerHandler}
          sx={{
            cursor: "pointer",
            color: "text.primary",
          }}
        />
      )}

      {isMobile && selectedItem && (
        <ArrowBackIcon
          onClick={() => restHanlder(true)}
          sx={{
            cursor: "pointer",
            color: "text.primary",
          }}
        />
      )}

      {!isMobile && (
        <Box>
          <SearchBar
            listData={listData}
            onChangeHandler={onChangeHandler}
            restHanlder={restHanlder}
          />
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          color: "text.primary",
        }}
      >
        {themeType === "dark" ? (
          <LightModeOutlinedIcon
            onClick={handleThemeToggle}
            sx={{ cursor: "pointer" }}
            aria-label="Switch to light mode"
          />
        ) : (
          <NightsStayOutlinedIcon
            onClick={handleThemeToggle}
            sx={{ cursor: "pointer" }}
            aria-label="Switch to dark mode"
          />
        )}

        {!isMobile && <MoreVertOutlinedIcon sx={{ cursor: "pointer" }} />}
      </Box>
    </Box>
  );
};

export default Header;
