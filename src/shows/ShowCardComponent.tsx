import * as React from "react";
import { Box, Rating } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IShowCardProps {
  id?: number;
  name?: string;
  summary?: string;
  image?: string;
  rating?: number;
}

const ShowCard: React.FC<IShowCardProps> = () => {
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
        image="https://static.tvmaze.com/uploads/images/original_untouched/11/27896.jpg"
        // ToDo change alt to the name of the show
        alt=""
        sx={{ objectFit: "contain", width: 200 }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h1" variant="h4">
            The Powerpuff Girls
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="h2">
            is an award-winning animated action series about three super-powered
            little girls Bubbles, Blossom and Buttercup with one very big
            mission: saving the world before bedtime.
          </Typography>
          <Typography variant="subtitle1" component="h3">
            Rating
          </Typography>
          <Rating
            name="read-only"
            value={2.5}
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
