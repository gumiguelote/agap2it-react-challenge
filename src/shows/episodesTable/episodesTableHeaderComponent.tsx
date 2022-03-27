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
        <TableCell>Name</TableCell>
        <TableCell>Action</TableCell>
      </TableRow>
    );
  }
  return (
    <TableRow>
      <TableCell>Number</TableCell>
      <TableCell>Date</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Action</TableCell>
    </TableRow>
  );
};

export default ResizableTableHeader;
