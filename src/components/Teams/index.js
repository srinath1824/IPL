import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actionTypes from "../actions";
import { compose } from "redux";
import FlightIcon from "@material-ui/icons/Flight";
import CopyrightIcon from "@material-ui/icons/Copyright";

class Teams extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.playerSelected) {
      this.props.setPlayerSelected("");
    }
  }
  handleData(name) {
    this.props.setPlayerSelected(name);
    this.props.history.push("/playerInfo");
  }

  render() {
    let members = [];
    let teamOrder = ["Wicket Keeper", "Batsman", "All-Rounder", "Bowler"];
    if (this.props.team.length > 0) {
      teamOrder.map(o => {
        members.push(
          this.props.team.map(m => {
            if (o === m.role) {
              return (
                <Grid item xs={6} sm={4} lg={3}>
                  <div onClick={() => this.handleData(m.playerName)}>
                    {m.overseas && (
                      <FlightIcon
                        style={{ transform: "translate(0px, -150px)" }}
                      />
                    )}
                    {m.Captain && (
                      <CopyrightIcon
                        color="primary"
                        style={{ transform: "translate(0px, -150px)" }}
                      />
                    )}
                    <img
                      src={`/Teams/${this.props.teamSelected}/${m.playerName}.png`}
                      width="180px"
                    />

                    <h2>{m.playerName}</h2>
                    <h4>{m.role}</h4>
                  </div>
                </Grid>
              );
            }
          })
        );
      });
    } else {
      return <h1>No Data Found</h1>;
    }
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.props.teamSelected}</h1>
        <Grid container>{members}</Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    team: state.dashboard.team,
    teamSelected: state.dashboard.teamSelected,
    loading: state.dashboard.loading,
    jersey: state.dashboard.jersey,
    playerSelected: state.dashboard.playerSelected
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setPlayerSelected: data =>
      dispatch({ type: actionTypes.PLAYER_SELECT, data })
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Teams);
