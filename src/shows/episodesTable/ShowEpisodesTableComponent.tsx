import React from "react";
import {
  TableCell,
  Table,
  TableBody,
  Box,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import ResizableTableHeader from "./EpisodesTableHeaderComponent";
import { IEpisode, ISeasonEpisodes } from "../../interface/episodes.interface";
import { dateFormatToIUHelper } from "../../helpers/date.helper";

const ShowEpisodesTable: React.FC<ISeasonEpisodes> = ({ seasons }) => {
  const isMobile: boolean = useMediaQuery("(max-width:800px)");

  return (
    <Box sx={{ maxHeight: 600, overflow: "overlay" }}>
      {Object.keys(seasons).map((season) => (
        <Box sx={{ mb: 4 }} key={season}>
          <Typography component="h5" variant="h6">
            {`Season ${season}`}
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
                {seasons[season]?.map((episode: IEpisode) => (
                  <TableRow
                    key={episode.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {isMobile ? null : (
                      <>
                        <TableCell component="th" scope="row">
                          {episode.id}
                        </TableCell>
                        <TableCell scope="row">
                          {dateFormatToIUHelper(episode.airdate)}
                        </TableCell>
                      </>
                    )}
                    <TableCell scope="row">{episode.name}</TableCell>
                    <TableCell scope="row">
                      <Button variant="outlined">
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/${episode.id}/episode`}
                        >
                          Details
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </Box>
  );
};

export default ShowEpisodesTable;
