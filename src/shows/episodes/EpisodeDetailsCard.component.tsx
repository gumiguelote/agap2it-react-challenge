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
import { useSelector } from "../../hooks/useTypeSelector";
import { removeTagsFromString } from "../../helpers/string.helper";

const EpisodeDetailsCard: React.FC = () => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");
  const { episodeDetails, show } = useSelector((state) => state);

  return (
    <>
      <Breadcrumbs sx={{ mb: 2 }} aria-label="breadcrumb">
        <LinkMaterial underline="hover" color="inherit" component={Link} to="/">
          {show.name}
        </LinkMaterial>
        <Typography color="text.primary">{episodeDetails.name}</Typography>
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
            image={episodeDetails.image.medium}
            alt={episodeDetails.name}
            sx={{
              objectFit: "cover",
              maxWidth: isMobile ? null : 500,
              borderRadius: isMobile ? 0 : 2,
            }}
          />
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="h1" variant="h5">
              {episodeDetails.name}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="h2"
            >
              {removeTagsFromString(episodeDetails.summary)}
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <Button
        sx={{ mt: 2 }}
        component={Link}
        to="/"
        color="info"
        size="medium"
        variant="outlined"
      >
        Back to List
      </Button>
    </>
  );
};

export default EpisodeDetailsCard;
