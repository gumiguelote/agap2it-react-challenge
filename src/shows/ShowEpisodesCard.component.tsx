import React from "react";
import {
  Box,
  Divider,
  Card,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "../hooks/useTypeSelector";
import ShowEpisodesTable from "./episodesTable/ShowEpisodesTable.component";
import { IEpisode } from "../interface/episode.interface";

const ShowEpisodesCard: React.FC = () => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");
  const { episodes } = useSelector((state) => state);

  const groupEpisodesBySeason = (episodesArray: IEpisode[]): IEpisode[] => {
    return episodesArray.reduce((seasons: IEpisode[], episode: IEpisode) => {
      const episodesList = seasons[episode.season] || [];
      episodesList.push(episode);
      seasons[episode.season] = episodesList;
      return seasons;
    }, []);
  };

  return (
    <Card
      raised
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "",
        mt: 4,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h3" variant="h5">
            Episodes
          </Typography>
          <Divider sx={{ mb: 4 }} />
          <ShowEpisodesTable
            seasonsEpisodes={groupEpisodesBySeason(episodes)}
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default ShowEpisodesCard;
