import { Box, Typography } from "@mui/material";
import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 500,
      }}
    >
      <Typography variant="h2" component="h1">
        404
      </Typography>
      <Typography variant="h5" component="h2">
        Not Found
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
