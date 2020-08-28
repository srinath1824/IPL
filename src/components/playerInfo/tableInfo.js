import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function TableInfo(props) {
  const classes = useStyles();

  let rows = props.data.map(d => {
    if (props.name === "bat") {
      return {
        Date: d.Date,
        Matches: d.team,
        Score: d.Score,
        Balls: d.Balls,
        "S/R": d.SR,
        "4s": d["4s"],
        "6s": d["6s"],
        Wicket: d.Wicket
      };
    } else if (props.name === "bowl") {
    }
  });

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Matches</StyledTableCell>
            <StyledTableCell>Score</StyledTableCell>
            <StyledTableCell>Balls</StyledTableCell>
            <StyledTableCell>S/R</StyledTableCell>
            <StyledTableCell>4's</StyledTableCell>
            <StyledTableCell>6's</StyledTableCell>
            <StyledTableCell>Wicket</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow>
              <StyledTableCell>{row.Date}</StyledTableCell>
              <StyledTableCell>{row.Matches}</StyledTableCell>
              <StyledTableCell>{row.Score}</StyledTableCell>
              <StyledTableCell>{row.Balls}</StyledTableCell>
              <StyledTableCell>{row["S/R"]}</StyledTableCell>
              <StyledTableCell>{row["4s"]}</StyledTableCell>
              <StyledTableCell>{row["6s"]}</StyledTableCell>
              <StyledTableCell>{row.Wicket}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
