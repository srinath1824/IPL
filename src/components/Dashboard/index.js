import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Avatar, CardMedia } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "./index.css";

class Dashboard extends Component {
  handleClick(name) {
    this.props.history.push("teams");
  }

  teamCard(team) {
    return (
      <Card onClick={() => this.handleClick(team)}>
        <CardContent style={{ height: "150px", backgroundColor: team.color }}>
          <h1 style={{ fontSize: "4rem", textAlign: "center" }}>{team.name}</h1>
        </CardContent>
      </Card>
    );
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "lightgray",
          padding: "20px",
          position: "relative",
          top: "70px",
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
            <Card>
              <CardContent
                style={{ height: "150px", backgroundColor: "#3C215D" }}
              >
                <h1 style={{ fontSize: "4rem", textAlign: "center" }}>KKR</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent
                style={{ height: "150px", backgroundColor: "#D52031" }}
              >
                <h1 style={{ fontSize: "4rem", textAlign: "center" }}>RCB</h1>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent
                style={{ height: "150px", backgroundColor: "#C64F29" }}
              >
                <h1 style={{ fontSize: "4rem", textAlign: "center" }}>SRH</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent
                style={{ height: "150px", backgroundColor: "#1A4292" }}
              >
                <h1 style={{ fontSize: "4rem", textAlign: "center" }}>DD</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent
                style={{ height: "150px", backgroundColor: "#E0212C" }}
              >
                <h1 style={{ fontSize: "4rem", textAlign: "center" }}>KXP</h1>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <Card>
              <CardContent
                style={{ height: "150px", backgroundColor: "#0D4D9F" }}
              >
                <h1 style={{ fontSize: "4rem", textAlign: "center" }}>RR</h1>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Dashboard);
