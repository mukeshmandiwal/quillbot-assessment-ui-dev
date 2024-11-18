import React from "react";
import { styled } from "@mui/system";

/**
 * Styled button component with customizable styles using MUI system
 */
const StyledButton = styled("button")(
  ({ theme, variant, fontSize, fontWeight, styles, ...rest }) => ({
    padding: "8px 16px",
    borderRadius: "4px",
    cursor: "pointer",
    width: styles.width || "154px",
    fontSize: fontSize || "14px",
    fontWeight: fontWeight || 500,
    transition: "all 0.2s ease-in-out",
    ...(variant === "outlined"
      ? {
          backgroundColor: "transparent",
          border: `1px solid ${theme.palette?.btn?.primary}`,
          color: theme.palette?.btn?.primary,
        }
      : {
          backgroundColor: theme.palette?.btn?.primary,
          color: theme.palette.text.secondary,
          border: "none",
          "&:hover": {
            opacity: 0.8,
          },
        }),
    "&:disabled": {
      backgroundColor: "#ccc",
      cursor: "not-allowed",
      ...(variant === "outlined" && {
        border: "1px solid #ccc",
        color: "#ccc",
      }),
    },
    ...styles,
  })
);

/**
 * Custom button component that can be either outlined or contained
 * @param {ReactNode} children - Content to be rendered inside the button
 * @param {string} variant - Button variant ('outlined' or 'contained')
 * @param {Object} props - Additional props to be spread on the button element
 * @returns {JSX.Element} Styled button component
 */
const Button = ({ children, variant = "contained", ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
