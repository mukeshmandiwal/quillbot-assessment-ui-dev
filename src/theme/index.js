import { createTheme } from "@mui/material";
import { darkModePalette, lightModePalette } from "./palette";

export const lightTheme = createTheme({
  palette: lightModePalette,
});

export const darkTheme = createTheme({
  palette: darkModePalette,
});
