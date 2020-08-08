import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

class Teams extends Component {
  render() {
    let members;
    if (this.props.team.length > 0) {
      members = this.props.team.map(m => {
        return (
          <Grid item xs={12} sm={4} lg={4}>
            {/* <Card style={{ backgroundColor: "lightcyan" }}>
              <CardContent
                style={{
                  height: "180px"
                  // backgroundColor: "grey"
                }}
              >
                <h2>{m.playerName}</h2>
                <h4>Role: {m.role}</h4>
                <h4>Price: {m.price}</h4>
              </CardContent>
            </Card> */}
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div
                  style={{
                    width: "20px",
                    display: "inline-block",
                    height: "20px",
                    backgroundColor: "green",
                    borderRadius: "50%",
                    padding: "1px"
                  }}
                >
                  .
                </div>
                <Typography style={{ fontWeight: "bold", marginLeft: "10px" }}>
                  {m.playerName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <h4>Role: {m.role}</h4>
                <h4>Price: {m.price}</h4>
              </AccordionDetails>
            </Accordion>
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
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1>{this.props.teamSelected}</h1>
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
    teamSelected: state.dashboard.teamSelected,
    loading: state.dashboard.loading
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     setTeamSelected: data => dispatch({ type: actionTypes.TEAM_SELECT, data })
//   };
// }

export default connect(mapStateToProps, null)(Teams);
