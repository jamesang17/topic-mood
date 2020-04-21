import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


export default class MonitoringSnack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Snackbar
         anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'left',
         }}
         open={this.state.open}
         autoHideDuration={3000}
         onClose={this.handleClose}
         message="No results were found for that topic."
        />
      </div>
    )
  }
}
