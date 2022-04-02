import * as React from "react";
import {
  Box,
  Rating,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useSelector } from "../hooks/useTypeSelector";
import { removeTagsFromString } from "../helpers/string.helper";

const ShowCard: React.FC = () => {
  const { show } = useSelector((state) => state);
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
        image={show.image?.medium}
        alt={show.name}
        sx={{ objectFit: "fill", width: 240 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h1" variant="h4">
            {show.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="h2">
            {removeTagsFromString(show.summary)}
          </Typography>
          <Typography variant="subtitle1" component="h3">
            Rating
          </Typography>
          <Rating
            name="read-only"
            value={show.rating?.average || 0}
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
