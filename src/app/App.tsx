import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, CssBaseline } from "@mui/material";
import Header from "../common/header/Header.component";
import Router from "../routes";
import { getEpisodes, getShow } from "../service/endpoints.service";
import { startLoadShow } from "../store/actions/show";
import { startLoadEpisodes } from "../store/actions/episodes";
import { startControlBackdrop } from "../store/actions/backdropLoading";
import BackdropComponent from "../common/backdrop/backdrop.component";

const SHOW_ID = "1955";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitialData = async (): Promise<void> => {
      dispatch(startLoadShow(await getShow(SHOW_ID)));
      dispatch(startLoadEpisodes(await getEpisodes(SHOW_ID)));
      dispatch(startControlBackdrop(false));
    };
    fetchInitialData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <CssBaseline />
      <BackdropComponent />
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Router />
      </Container>
    </>
  );
};

export default App;
