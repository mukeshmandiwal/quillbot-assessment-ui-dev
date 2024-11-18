import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";

/**
 * StyledDivider is a styled hr component that creates a customizable dividing line
 * @param {Object} props
 * @param {string} props.orientation - The orientation of the divider ('horizontal' or 'vertical')
 * @param {string} props.variant - The variant style of the divider ('fullWidth', 'inset', or 'middle')
 * @param {Object} props.theme - The theme object containing styling configurations
 * @param {Object} props.sx - Additional style overrides using MUI's sx prop
 */
const StyledDivider = styled("hr")(
  ({ orientation, variant, theme, sx, ...rest }) => ({
    margin: 0,
    borderStyle: "solid",
    borderColor: theme.palette.divider.primary,
    ...(orientation === "vertical" && {
      height: "auto",
      borderWidth: "0px 0px 0px thin",
    }),
    ...(variant === "middle" && {
      marginLeft: theme?.spacing(1),
      marginRight: theme?.spacing(1),
    }),
    ...(variant === "inset" && {
      marginLeft: 72,
    }),
    ...sx,
  })
);

/**
 * Divider component creates a horizontal or vertical dividing line with customizable styles
 * @param {Object} props
 * @param {string} [props.orientation='horizontal'] - The orientation of the divider
 * @param {string} props.variant - The variant style of the divider
 * @returns {React.ReactElement} A styled divider component
 */
const Divider = ({ orientation = "horizontal", variant, ...props }) => {
  return (
    <StyledDivider
      role="separator"
      orientation={orientation}
      variant={variant}
      {...props}
    />
  );
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  variant: PropTypes.oneOf(["fullWidth", "inset", "middle"]),
};

export default Divider;
