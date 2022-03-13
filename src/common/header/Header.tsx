import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header: React.FC = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1, mb: 12 }}>
      <AppBar component="nav" position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="span"
            aria-label="Application Title"
          >
            React Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
