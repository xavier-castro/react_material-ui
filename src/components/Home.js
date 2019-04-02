import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContext: {
    backgroundColor: theme.palette.secondary.main,
    height: "400px",
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  }
});

const Home = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.heroUnit}>
        <div className={classes.heroContext}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Hero
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
