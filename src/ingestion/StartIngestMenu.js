import React from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

class StartIngestMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            topic: "",
            apiResponse: ""
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.callAPI = this.callAPI.bind(this);
    }

    callAPI() {
        fetch("http://localhost:4000/dag_run_status")
            .then(response => response.text())
            .then(response => this.setState({ apiResponse: response }));
    }

    handleClickOpen(event) {
        console.log("Opening!");
        this.setState({ open: true });
    }

    handleClose(event) {
        console.log("Closing!");
        this.setState({ open: false });
    }

    handleSubmit(event) {
        console.log("Clicked submit!");
        console.log("Topic: " + this.state.topic);
        this.setState({ open: false });
        this.callAPI();
        console.log("Response: " + this.state.apiResponse);
    }

	render() {
		return (
			<div>
				<Fab variant="extended" onClick={this.handleClickOpen}>
        			Start Ingestion
      			</Fab>
                <Dialog onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    open={this.state.open}>
                    <DialogTitle id="form-dialog-title">Start Ingestion</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the topic you would you like to run sentiment analysis on. The topic field can take single
                            phrase topics such as "NYC" or "New York City". At the moment it cannot take multiple topics at the
                            same time such as "NYC,CA".
                        </DialogContentText>
                        <TextField autoFocus margin="dense" id="topic"
                            label="topic" type="text"
                            fullWidth inputRef={this.ref}
                            onChange={(e) => this.setState({topic: e.currentTarget.value})} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary">
                            Start
                        </Button>
                    </DialogActions>
                </Dialog>
			</div>
		);
	}
}

export default withStyles(useStyles)(StartIngestMenu);
