import * as React from "react";
import {
  Box,
  Breadcrumbs,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";

interface IEpisodeDetailsCard {
  id?: number;
  name?: string;
  summary?: string;
  image?: string;
  rating?: number;
}

const EpisodeDetailsCard: React.FC<IEpisodeDetailsCard> = () => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");

  return (
    <>
      <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          THE POWERPUFF GIRLS
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Episodes
        </Link>
        <Typography color="text.primary">
          CRAZY MIXED UP PUFFS / MIZZEN IN ACTION
        </Typography>
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
            image="https://static.tvmaze.com/uploads/images/large_landscape/238/596382.jpg"
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
              Crazy Mixed Up Puffs / Mizzen in Action
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="h2"
            >
              "Crazy Mixed Up Puffs" The girls must literally work as one to try
              and stop Mojo from destroying Townsville. "Mizzen in Action"
              Captain Crack McGraigen and his crew are tossed forward in time.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default EpisodeDetailsCard;
