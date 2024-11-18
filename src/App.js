import React from "react";
import { CustomThemeProvider } from "./context/ThemeProvider";
import { Box } from "@mui/system";
import Layout from "./Layout";

function App() {
  return (
    <CustomThemeProvider>
      <Box
        component="main"
        sx={{
          bgcolor: "background.body",
          minHeight: "100vh",
          transition: "all 0.3s",
          display: "flex",
        }}
      >
        <Layout />
      </Box>
    </CustomThemeProvider>
  );
}

export default App;
