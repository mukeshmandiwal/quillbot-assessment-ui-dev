import React from "react";
import { Box, useMediaQuery } from "@mui/system";
import Typography from "../../components/Typography";
import {
  SIDBAR_PROFILE,
  SIDBAR_WATCH_OPTIONS,
  SIDBAR_MAIN_OPTIONS,
} from "./constant";
import { menuItemStyles, menuTextStyles, menuSectionStyles } from "./styles";
import Divider from "../../components/Divider";
import profileImg from "../../assets/images/profile.png";
import { LABEL_USER_NAME } from "../../constants/labels";

/**
 * MenuItem component renders a single menu item with an icon and label
 * @param {Object} props - Component props
 * @param {React.ComponentType} props.icon - Icon component to render
 * @param {string} props.label - Text label for the menu item
 */
const MenuItem = ({ icon: Icon, label, highlightedItem }) => (
  <Box
    sx={{
      ...menuItemStyles,
      position: "relative",
      "&::after": {
        content: '""',
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        width: "3px",
        height: "33px",
        backgroundColor:
          highlightedItem === label ? "border.primary" : "transparent",
      },
    }}
  >
    <Icon
      sx={{
        color: highlightedItem === label ? "text.highlight" : "text.primary",
      }}
    />
    <Typography
      sx={{
        ...menuTextStyles,
        color: highlightedItem === label ? "text.highlight" : "text.primary",
      }}
    >
      {label}
    </Typography>
  </Box>
);

/**
 * MenuSection component renders a group of menu items with a divider
 * @param {Object} props - Component props
 * @param {Array} props.items - Array of menu items with icon and label properties
 */
const MenuSection = ({ items, highlightedItem }) => (
  <>
    <Box
      sx={{ ...menuSectionStyles, paddingRight: !highlightedItem ? "10px" : 0 }}
    >
      {items.map((item) => (
        <MenuItem
          key={item.label}
          highlightedItem={highlightedItem}
          {...item}
        />
      ))}
    </Box>
    <Divider
      orientation="horizontal"
      sx={{
        height: "1px",
        width: "100%",
      }}
    />
  </>
);

/**
 * ProfileSection component displays the user profile image and name
 * at the top of the sidebar
 */
const ProfileSection = () => (
  <Box
    sx={{
      paddingTop: "40px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img src={profileImg} width={90} height={90} alt="Profile" />
    <Typography
      variant="h5"
      sx={{
        color: "text.primary",
        fontSize: "20px",
        fontWeight: "600",
        marginBottom: "40px",
        marginTop: "10px",
      }}
    >
      {LABEL_USER_NAME}
    </Typography>
  </Box>
);

/**
 * SideNavbar component is the main navigation sidebar of the application
 * It contains the user profile section and three menu sections:
 * - Main options (Discover, Playlist, Movie, TV Shows, My List)
 * - Watch options (Watch Later, Recommended)
 * - Profile options (Settings, Logout)
 */
function SideNavbar() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      component="main"
      sx={{
        bgcolor: "background.sideNav",
        minHeight: "100vh",
        width: isMobile ? "100%" : "20%",
        transition: "all 0.3s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ProfileSection />
      <Divider
        orientation="horizontal"
        sx={{
          height: "1px",
          width: "100%",
        }}
      />
      <MenuSection
        items={SIDBAR_MAIN_OPTIONS}
        highlightedItem={SIDBAR_MAIN_OPTIONS[0].label}
      />
      <MenuSection items={SIDBAR_WATCH_OPTIONS} />
      <MenuSection items={SIDBAR_PROFILE} />
    </Box>
  );
}

export default SideNavbar;
