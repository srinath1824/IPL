import { Grid, Container } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import actionTypes from "../actions";
import { compose } from "redux";
import FlightIcon from "@material-ui/icons/Flight";
import CopyrightIcon from "@material-ui/icons/Copyright";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

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
            console.log(m);
            if (o === m.role) {
              return (
                <Grid item xs={12} sm={4} lg={3}>
                  <Card
                    onClick={() => this.handleData(m.playerName)}
                    style={{ cursor: "pointer", opacity: "0px" }}
                  >
                    <CardContent
                      className="cards"
                      style={{
                        height: "300px",
                        background: this.props.jersey
                      }}
                    >
                      {/* <div onClick={() => this.handleData(m.playerName)}>
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
                      </div> */}

                      <div
                        style={{
                          justifyContent: "center"
                        }}
                      >
                        <CardMedia>
                          <Grid container>
                            <Grid item xs={2}>
                              {m.Captain && (
                                <CopyrightIcon
                                  style={{
                                    backgroundColor: "blue",
                                    color: "white",
                                    borderRadius: "50%"
                                  }}
                                />
                              )}
                              {m.overseas && (
                                <FlightIcon style={{ color: "white" }} />
                              )}
                            </Grid>
                            <Grid item xs={m.Captain || m.overseas ? 10 : 12}>
                              <img
                                src={`/Teams/${this.props.teamSelected}/${m.playerName}.png`}
                                width="180px"
                                height="180px"
                              />
                            </Grid>
                          </Grid>
                        </CardMedia>
                      </div>
                      <Grid container>
                        <Grid item xs={12}>
                          <div style={{ textAlign: "center" }}>
                            <div
                              style={{
                                fontSize: "1rem",
                                color: "white",
                                fontWeight: "bold"
                              }}
                            >
                              <div>{m.playerName}</div>
                              <div
                                style={{ fontSize: "1rem", fontWeight: 300 }}
                              >
                                {m.role}
                              </div>
                            </div>
                          </div>
                        </Grid>
                        <Grid item xs={12}>
                          <Grid
                            container
                            className="MatchesInfo"
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              textAlign: "center",
                              fontSize: "larger",
                              color: "white"
                            }}
                          >
                            <Grid item xs={4}>
                              <div>Matches</div>
                              <div
                                style={{ fontSize: "30px", fontWeight: "bold" }}
                              >
                                0
                              </div>
                            </Grid>
                            <Grid item xs={4}>
                              <div>Runs</div>
                              <div
                                style={{ fontSize: "30px", fontWeight: "bold" }}
                              >
                                0
                              </div>
                            </Grid>
                            <Grid item xs={4}>
                              <div>Wickets</div>
                              <div
                                style={{ fontSize: "30px", fontWeight: "bold" }}
                              >
                                0
                              </div>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
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
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            {members}
          </Grid>
        </Container>
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
