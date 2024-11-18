import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";

/**
 * StyledTypography is a styled component that provides consistent text styling
 * based on the variant prop. It supports different typography variants like
 * headings (h1-h6), subtitles, body text, and captions.
 */
const StyledTypography = styled("p")(({ variant, theme, sx, ...rest }) => ({
  margin: 0,
  fontFamily: "'Open Sans', sans-serif",
  ...(variant === "h1" && {
    fontSize: "2.5rem",
    fontWeight: 600,
    lineHeight: 1.2,
  }),
  ...(variant === "h2" && {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.3,
  }),
  ...(variant === "h3" && {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.4,
  }),
  ...(variant === "h4" && {
    fontSize: "1.5rem",
    fontWeight: 500,
    lineHeight: 1.4,
  }),
  ...(variant === "h5" && {
    fontSize: "1.25rem",
    fontWeight: 500,
    lineHeight: 1.4,
  }),
  ...(variant === "h6" && {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.4,
  }),
  ...(variant === "subtitle1" && {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.75,
  }),
  ...(variant === "subtitle2" && {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.57,
  }),
  ...(variant === "body1" && {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
  }),
  ...(variant === "body2" && {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
  }),
  ...(variant === "caption" && {
    fontSize: "0.75rem",
    fontWeight: 400,
    lineHeight: 1.66,
  }),
  ...(variant === undefined && {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
  }),
  ...(rest.align && {
    textAlign: rest.align,
  }),
  ...(rest.color && {
    color: rest.color,
  }),
  ...sx,
}));

/**
 * Typography component provides consistent text styling across the application
 * with support for different variants, alignment, and colors.
 *
 * @component
 * @param {Object} props - Component props
 * @param {('h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'subtitle1'|'subtitle2'|'body1'|'body2'|'caption')} [props.variant='body1'] - Typography variant to use
 * @param {React.ElementType} [props.component] - Component to render as (defaults to StyledTypography)
 * @param {('inherit'|'left'|'center'|'right'|'justify')} [props.align] - Text alignment
 * @param {string} [props.color] - Text color
 * @param {React.ReactNode} props.children - Content to render
 * @returns {React.ReactElement} Rendered Typography component
 */
const Typography = ({ variant = "body1", component, children, ...props }) => {
  const Component = component || StyledTypography;
  return (
    <Component
      as={variant.match(/h[1-6]/) ? variant : undefined}
      variant={variant}
      {...props}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "subtitle1",
    "subtitle2",
    "body1",
    "body2",
    "caption",
  ]),
  component: PropTypes.elementType,
  align: PropTypes.oneOf(["inherit", "left", "center", "right", "justify"]),
  color: PropTypes.string,
  children: PropTypes.node,
};

export default Typography;
