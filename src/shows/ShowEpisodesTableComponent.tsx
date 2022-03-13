import React from "react";
import {
  TableCell,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

interface IShowEpisodesTable {
  season?: number;
  episodes?: IEpisodeItem[];
}

interface IEpisodeItem {
  id: number;
  name: string;
  summary: string;
}

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

const ShowEpisodesTable: React.FC<IShowEpisodesTable> = () => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");

  return (
    <>
      <Typography component="h5" variant="h6">
        Season [number]
      </Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table
          sx={{ minWidth: isMobile ? 300 : 820 }}
          size="small"
          aria-label="Episodes table list"
        >
          <TableHead>
            <ResizableTableHeader isMobile={isMobile} />
          </TableHead>
          <TableBody>
            <TableRow
              // key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                15
              </TableCell>
              <TableCell scope="row">Aug 20, 2004</TableCell>
              <TableCell scope="row">
                Crazy Mixed Up Puffs / Mizzen in Action
              </TableCell>
              <TableCell scope="row">
                <Link to="/12/episode">Details</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowEpisodesTable;
