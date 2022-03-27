import React from "react";
import { Box, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ShowEpisodesTable from "./episodesTable/ShowEpisodesTableComponent";

interface IShowEpisodesCard {
  episodes?: [];
}

const ShowEpisodesCard: React.FC<IShowEpisodesCard> = () => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");

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
          <ShowEpisodesTable />
        </CardContent>
      </Box>
    </Card>
  );
};

export default ShowEpisodesCard;
