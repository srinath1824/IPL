import React, { Component } from "react";
import { Grid, Card } from "@material-ui/core";
import { connect } from "react-redux";
import TableInfo from "./tableInfo";

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
            <Grid item xs={4}>
              <h4>{playerInfo.playerName}</h4>
              <h4>Role :{playerInfo.role}</h4>
            </Grid>
            <Grid item xs={4}>
              <h4>Matches: 0</h4>
              <h4>Runs: 0</h4>
              <h4>Wickets: 0</h4>
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
