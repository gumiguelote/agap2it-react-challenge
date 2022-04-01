import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, CssBaseline } from "@mui/material";
import Header from "../common/header/Header";
import Router from "../routes";
import { getEpisodes, getShow } from "../service/endpoints.service";
import { startLoadShow } from "../store/actions/show";
import { startLoadEpisodes } from "../store/actions/episodes";

const SHOW_ID = "1955";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchShow = async (): Promise<void> => {
      dispatch(startLoadShow(await getShow(SHOW_ID)));
    };
    fetchShow();
  }, [dispatch]);

  useEffect(() => {
    const fetchEpisodes = async (): Promise<void> => {
      dispatch(startLoadEpisodes(await getEpisodes(SHOW_ID)));
    };
    fetchEpisodes();
  }, [dispatch]);

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
