import React from "react";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { useSeacrhBar } from "./useSeacrhBar";
import { LABLE_PLACE_HOLDER } from "../../constants/labels";

/**
 * StyledSearch is a styled component that creates an expandable search container.
 * It transitions between a compact icon-only state and an expanded search bar.
 * @param {Object} props
 * @param {boolean} props.isExpanded - Controls if the search bar is expanded
 */
const StyledSearch = styled("div")(({ theme, isExpanded, width = 568 }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  backgroundColor: isExpanded ? theme.palette.searchBar.primary : "transparent",
  borderRadius: 8,
  transition: "all 0.3s ease",
  width: isExpanded ? width : 40,
  height: 55,
  cursor: "pointer",
  opacity: isExpanded ? 1 : 0.8,
  transform: isExpanded ? "scale(1)" : "scale(0.95)",
}));

/**
 * IconWrapper is a styled component that contains and positions the search icon
 */
const IconWrapper = styled("div")({
  padding: "0 12px",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#D4D7DD",
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

/**
 * Input is a styled component that extends Material-UI's InputBase
 * with custom styling for the search input field
 */
const Input = styled(InputBase)(({ theme }) => ({
  color: "#D4D7DD",
  width: "100%",
  transition: "opacity 0.2s ease",
  animation: "fadeIn 0.3s ease",
  "& .MuiInputBase-input": {
    padding: 8,
    paddingLeft: 8,
    width: "100%",
    "&::placeholder": {
      fontSize: 19,
      fontWeight: 400,
      color: theme.palette.text.placeHolder,
    },
  },
  "@keyframes fadeIn": {
    "0%": {
      opacity: 0,
      transform: "translateX(-10px)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
}));

/**
 * SearchBar component provides an expandable search interface
 * It starts as a compact search icon and expands to show an input field when clicked
 * @returns {React.ReactElement} The SearchBar component
 */
const SearchBar = ({ onChangeHandler, restHanlder, width, isMobile }) => {
  const { isClosing, handleClick, isExpanded } = useSeacrhBar();

  return (
    <StyledSearch isExpanded={isMobile || isExpanded} width={width}>
      <IconWrapper onClick={handleClick}>
        <SearchIcon
          sx={{
            color: "text.primary",
          }}
        />
      </IconWrapper>
      {(isMobile || isExpanded) && (
        <>
          <Input
            onChange={onChangeHandler}
            placeholder={LABLE_PLACE_HOLDER}
            inputProps={{ "aria-label": "search" }}
            autoFocus
            sx={{
              opacity: isClosing ? 0 : 1,
              transition: "opacity 0.2s ease",
            }}
          />
          <IconWrapper onClick={handleClick}>
            <CloseIcon
              onClick={restHanlder}
              sx={{
                color: "text.primary",
                opacity: isClosing ? 0 : 1,
                transition: "opacity 0.2s ease",
              }}
            />
          </IconWrapper>
        </>
      )}
    </StyledSearch>
  );
};

export default SearchBar;
