import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import actionTypes from "../actions";
import axios from "axios";
import "./index.css";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(team) {
    this.props.setTeamSelected(team.name);
    this.props.loadingSelected(true);
    axios
      .get(`http://localhost:5000/api/getdata/${team.name}`)
      .then(res => {
        console.log("DATA", res.data);
        // this.setState({ data: false });
        this.props.loadingSelected(false);
        this.props.getTeamSelected(res.data);
      })
      .catch(err => console.log("error"));
    this.props.history.push("teams");
  }

  teamCard(team) {
    return (
      <Card onClick={() => this.handleClick(team)}>
        <CardContent
          style={{
            height: "150px",
            backgroundColor: team.color
          }}
        >
          <h1 style={{ fontSize: "4rem", textAlign: "center" }}>{team.name}</h1>
        </CardContent>
      </Card>
    );
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "20px",
            position: "relative",
            top: "70px"
          }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "CSK", color: "#FDB41B" })}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "MI", color: "#23508F" })}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "KKR", color: "#3C215D" })}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "RCB", color: "#D52031" })}
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "SRH", color: "#C64F29" })}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "DD", color: "#1A4292" })}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "KXIP", color: "#E0212C" })}
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              {this.teamCard({ name: "RR", color: "#0D4D9F" })}
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    teamSelected: state.dashboard.teamSelected
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setTeamSelected: data => dispatch({ type: actionTypes.TEAM_SELECT, data }),
    getTeamSelected: data => dispatch({ type: actionTypes.SELECT_TEAM, data }),
    loadingSelected: data => dispatch({ type: actionTypes.LOADING_PAGE, data })
  };
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Dashboard);
