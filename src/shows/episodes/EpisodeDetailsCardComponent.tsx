import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  Link as LinkMaterial,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IEpisodeDetail } from "../../interface/episodes.interface";
import { removeTagsFromString } from "../../helpers/string.helper";

interface IEpisodeDetailsProps {
  episode: IEpisodeDetail;
}

const EpisodeDetailsCard: React.FC<IEpisodeDetailsProps> = ({ episode }) => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");

  return (
    <>
      <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb">
        <LinkMaterial underline="hover" color="inherit" href="/">
          {episode.name}
        </LinkMaterial>
        <Typography color="text.primary">{episode.name}</Typography>
      </Breadcrumbs>
      <Card
        raised
        component="section"
        sx={{
          pt: isMobile ? 0 : 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            image={episode.image.original}
            // ToDo change alt to the name of the episode
            alt=""
            sx={{
              objectFit: "cover",
              maxWidth: isMobile ? null : 500,
              borderRadius: isMobile ? 0 : 2,
            }}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="h1" variant="h5">
              {episode.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="h2"
            >
              {removeTagsFromString(episode.summary)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Link style={{ textDecoration: "none" }} to="/">
        <Button sx={{ mt: 2 }} color="info" size="medium" variant="outlined">
          Back to List
        </Button>
      </Link>
    </>
  );
};

export default EpisodeDetailsCard;
