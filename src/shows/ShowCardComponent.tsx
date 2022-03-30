import * as React from "react";
import { Box, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IShow } from "../interface/shows.interface";
import { removeTagsFromString } from "../helpers/string.helper";

interface IShowProps {
  showProps: IShow;
}

const ShowCard: React.FC<IShowProps> = ({ showProps }) => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");

  return (
    <Card
      raised
      component="section"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "",
        pt: isMobile ? 4 : "",
      }}
    >
      <CardMedia
        component="img"
        image={showProps.image?.original}
        alt={showProps.name}
        sx={{ objectFit: "fill", width: 240 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h1" variant="h4">
            {showProps.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="h2">
            {removeTagsFromString(showProps.summary)}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            Rating
          </Typography>
          <Rating
            name="read-only"
            value={showProps.rating?.average || 0}
            max={10}
            precision={0.5}
            readOnly
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default ShowCard;
