import React from 'react';
import logo from '../twitter.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class MenuAppBar extends React.Component {

    render() {
      return (
        <div className={this.props.classes.root}>
          <AppBar position="static">
            <Typography variant="h6" className={this.props.classes.title}>
              Tweet Analyzer
            </Typography>
            <img src={logo} className="App-logo" alt="logo" />
          </AppBar>
        </div>
      );
    }

}

export default withStyles(styles)(MenuAppBar);
