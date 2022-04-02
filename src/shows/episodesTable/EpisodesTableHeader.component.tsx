import React from "react";
import { TableCell, TableRow } from "@mui/material";

interface IResizableTableHeader {
  isMobile: boolean;
}

const ResizableTableHeader: React.FC<IResizableTableHeader> = ({
  isMobile,
}) => {
  if (isMobile) {
    return (
      <TableRow>
        <TableCell>Title</TableCell>
        <TableCell align="center">Action</TableCell>
      </TableRow>
    );
  }
  return (
    <TableRow>
      <TableCell>Number</TableCell>
      <TableCell>Date</TableCell>
      <TableCell>Title</TableCell>
      <TableCell align="center">Action</TableCell>
    </TableRow>
  );
};

export default ResizableTableHeader;
