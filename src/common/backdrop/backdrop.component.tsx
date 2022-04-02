import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "../../hooks/useTypeSelector";

const BackdropComponent: React.FC = () => {
  const { isLoading } = useSelector((state) => state);
  return (
    <Backdrop
      sx={{
        color: "#fff",
        backgroundColor: (theme) => theme.palette.primary.main,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      transitionDuration={{ appear: 0, exit: 0.5 }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropComponent;
