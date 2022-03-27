import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "../common/header/Header";
import Router from "../routes";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <CssBaseline />
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Router />
      </Container>
    </>
  );
};

export default App;
