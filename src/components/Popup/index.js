import React, { Component } from "react";
import { Dialog, DialogTitle, Grid } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Divider from "@material-ui/core/Divider";

export default class Popup extends Component {
  tableData(data) {
    console.log("DATA", data);
    return (
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Team</TableCell>
              <TableCell>bat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(data).map(p => (
              <TableRow key={p.name}>
                <TableCell component="th" scope="row">
                  {p.name}
                </TableCell>
                <TableCell align="right">{p.bat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  render() {
    //const data = this.props.player;
    return (
      <Dialog
        aria-labelledby="customized-dialog-title"
        open={this.props.show}
        onClose={this.props.close}
      >
        <DialogTitle id="customized-dialog-title">
          Player Performance
        </DialogTitle>

        {/* <Grid container>
          <Grid item xs={6}>
            {this.tableData(data)}
          </Grid>

          <Grid item xs={6}>
            <Divider orientation="vertical" flexItem />
            <Grid container>
              <Grid item xs={12}>
                {this.tableData(data)}
              </Grid>

              <Grid item xs={12}>
                {this.tableData(data)}
              </Grid>
            </Grid>
          </Grid>
        </Grid> */}
      </Dialog>
    );
  }
}
