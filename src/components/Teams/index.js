import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";

class Teams extends Component {
  render() {
    let members;
    if (this.props.team.length > 0) {
      members = this.props.team.map(m => {
        return (
          <Grid item xs={4} sm={6} lg={3}>
            <Card style={{ backgroundColor: "grey" }}>
              <CardContent
                style={{
                  height: "150px"
                  // backgroundColor: "grey"
                }}
              >
                <h1 style={{ fontSize: "2rem", textAlign: "center" }}>
                  {m.playerName}
                </h1>
                <h4>{m.role}</h4>
              </CardContent>
            </Card>
          </Grid>
        );
      });
    } else {
      return <h1>No Data Found</h1>;
    }
    return this.props.loading ? (
      <Backdrop open={this.props.loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    ) : (
      <div style={{ padding: "40px" }}>
        <Grid container spacing={5}>
          {members}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    team: state.dashboard.team,
    loading: state.dashboard.loading
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     setTeamSelected: data => dispatch({ type: actionTypes.TEAM_SELECT, data })
//   };
// }

export default connect(mapStateToProps, null)(Teams);
