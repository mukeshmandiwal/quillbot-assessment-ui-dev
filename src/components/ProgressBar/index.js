import React from "react";
import { styled } from "@mui/system";

/**
 * Styled component for the progress bar container
 * @param {object} theme - MUI theme object
 * @param {number} progress - Progress value (0-100)
 * @param {object} sx - Custom styles object
 */
const StyledProgressBar = styled("div")(({ theme, progress = 10, sx }) => ({
  width: sx?.width || "100%",
  height: "8px",
  backgroundColor: "#283647",
  borderRadius: "5px",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    borderRadius: "5px",
    width: `${progress}%`,
    backgroundColor: theme.palette?.btn?.primary || "#00E0FF",
    transition: "width 0.5s ease-in-out",
    animation: "pulse 2s infinite, progressAnimation 1s ease-out",
  },

  "@keyframes pulse": {
    "0%": {
      opacity: 0.6,
    },
    "50%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0.6,
    },
  },

  "@keyframes progressAnimation": {
    "0%": {
      width: "0%",
    },
    "100%": {
      width: `${progress}%`,
    },
  },
  ...sx,
}));

/**
 * ProgressBar Component
 * A customizable progress bar with animation effects
 *
 * @component
 * @param {Object} props
 * @param {number} props.progress - The progress value (0-100)
 * @param {Object} props.rest - Additional props to be spread on the component
 * @returns {React.Element} A styled progress bar component
 *
 * @example
 * <ProgressBar progress={75} sx={{ width: "200px" }} />
 */
const ProgressBar = ({ progress, ...rest }) => {
  return (
    <StyledProgressBar
      progress={progress}
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
      {...rest}
    />
  );
};

export default ProgressBar;
