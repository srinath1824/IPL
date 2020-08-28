import React, { Component } from "react";
import { Grid, Card } from "@material-ui/core";
import { connect } from "react-redux";
import TableInfo from "./tableInfo";
import FlightIcon from "@material-ui/icons/Flight";
import CopyrightIcon from "@material-ui/icons/Copyright";

class PlayerInfo extends Component {
  render() {
    let playerInfo = this.props.team.find(
      a => a.playerName === this.props.playerSelected
    );
    console.log("2222", playerInfo);

    return (
      <div>
        <Card style={{ background: this.props.jerseyColor }}>
          <Grid container>
            <Grid item xs={4}>
              <img
                src={`/Teams/${this.props.teamSelected}/${playerInfo.playerName}.png`}
                width="180px"
              />
            </Grid>
            <Grid item xs={4} style={{ color: "white" }}>
              {playerInfo.overseas && (
                <FlightIcon style={{ transform: "translate(0px, -150px)" }} />
              )}
              {playerInfo.Captain && (
                <CopyrightIcon
                  color="primary"
                  style={{ transform: "translate(0px, -150px)" }}
                />
              )}
              <h1>
                <span>{playerInfo.playerName}</span>
              </h1>
              <h4>Role :{playerInfo.role}</h4>
            </Grid>
            <Grid
              item
              xs={4}
              style={{
                color: "white",
                display: "inline"
              }}
            >
              <h4
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "20px"
                }}
              >
                Matches: 0
              </h4>
              <h4
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "20px"
                }}
              >
                Runs: 0
              </h4>
              <h4
                style={{
                  display: "inline-block",
                  textAlign: "center",
                  marginRight: "20px"
                }}
              >
                Wickets: 0
              </h4>
            </Grid>
          </Grid>
        </Card>
        <h1>Batting</h1>
        <TableInfo data={playerInfo.matches} name="bat" />
        {/* <TableInfo data={playerInfo.matches} name="bowl" /> */}
        <h1>Bowling</h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    teamSelected: state.dashboard.teamSelected,
    playerSelected: state.dashboard.playerSelected,
    team: state.dashboard.team,
    jerseyColor: state.dashboard.jersey
  };
}

export default connect(mapStateToProps, null)(PlayerInfo);
