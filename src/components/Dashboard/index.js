import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Avatar } from "@material-ui/core";

class Dashboard extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "lightgray",
          padding: "20px",
          position: "relative",
          top: "70px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ height: "150px" }}>
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  style={{ width: "250px", height: "230px", zoom: "70%" }}
                  src="https://lh4.googleusercontent.com/proxy/gEsdFSB0jTenRvlNeOv3RixCCidq1MPESm5ePhcSKlsxqLg5oRs6NqUfXhJNmSXz1eRsyGEX_noHP5mjf6OlwXL292q0I7oTojz2YUJs1SReZ6gyuiK_vyr30ePMay5i5YzZuA"
                />
                {/* <img src= /> */}
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent style={{ height: "150px" }}>
                <Avatar
                  alt="Remy Sharp"
                  variant="square"
                  style={{ width: "300px", height: "350px", zoom: "50%" }}
                  src="https://lh3.googleusercontent.com/proxy/JJRcqvsrVqGENA73OQ2uG4tcUhaFALtgkOHpzgOb04JMslZAH9rb6Np2OTx8beviWYXLz9epkIQ-SpocDa4MgZI2mUXHF4UCde7FdzaJMu2Vu0BFGBshOKzCONvazvB6unshD6U"
                />
                {/* <img src= /> */}
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  benevolent
                </Typography>
                <Typography>adjective</Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  benevolent
                </Typography>
                <Typography>adjective</Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  benevolent
                </Typography>
                <Typography>adjective</Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                  benevolent
                </Typography>
                <Typography>adjective</Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
