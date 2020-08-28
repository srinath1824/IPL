import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import FlightIcon from "@material-ui/icons/Flight";
import CopyrightIcon from "@material-ui/icons/Copyright";

class CompareCard extends Component {
  render() {
    let filteredData =
      this.props.teamsData &&
      this.props.teamsData[this.props.team].find(
        a => a.playerName === this.props.name
      );
    return (
      <div>
        <Grid container>
          <Grid item xs={6}>
            <img src={`/Teams/${this.props.team}/${this.props.name}.png`} />
            {filteredData.overseas && (
              <FlightIcon style={{ transform: "translate(0px, -150px)" }} />
            )}
            {filteredData.Captain && (
              <CopyrightIcon
                color="primary"
                style={{ transform: "translate(0px, -150px)" }}
              />
            )}
          </Grid>
          <Grid item xs={6} style={{ textAlign: "center", marginTop: "80px" }}>
            {filteredData.playerName}
            <br />
            {filteredData.role}
            <br />
            {this.props.team}
            <br />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CompareCard;
