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
import { MContext } from './IngestionProvider';
import './StartIngestMenu.css';

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
            openTopicDialog: false,
			openTrendDialog: false,
        }
        this.handleTopicClickOpen = this.handleTopicClickOpen.bind(this);
        this.handleTrendClickOpen = this.handleTrendClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleTopicClickOpen() {
        console.log("Clicked Topic button!");
        this.setState({ openTopicDialog: true })
    }

    handleTrendClickOpen() {
        console.log("Clicked Trend button!");
        this.setState({ openTrendDialog: true })
    }

    handleClose() {
        console.log("Closing!");
        if (this.state.openTopicDialog === true){
            this.setState({ openTopicDialog: false });
        }
        if (this.state.openTrendDialog === true){
            this.setState({ openTrendDialog: false });
        }
    }

	render() {
		return (
			<div>
                <MContext.Consumer>
                {(context) => (
                    <div>
                    <div className="Fab-button">
        				<Fab variant="extended" onClick={this.handleTopicClickOpen}>
                            Start Topic Ingestion
                        </Fab>
                    </div>
                    <div className="Fab-button">
                        <Fab variant="extended" onClick={this.handleTrendClickOpen}>
                            Start Trend Ingestion
                        </Fab>
                    </div>
                    <Dialog onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        open={this.state.openTopicDialog}>
                        <DialogTitle id="form-dialog-title">Start Topic Ingestion</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Enter the topic you would you like to run sentiment analysis on. The topic field can take single
                                phrase topics such as "NYC" or "New York City". At the moment it cannot take multiple topics at the
                                same time such as "NYC,CA".
                            </DialogContentText>
                            <TextField autoFocus margin="dense" id="topic"
                                label="topic" type="text"
                                fullWidth inputRef={this.ref}
                                onChange={(e) => context.setTopic(e.currentTarget.value)} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={() => {context.handleTopicSubmit(); this.handleClose();}} color="primary" >
                                Start
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        open={this.state.openTrendDialog}>
                        <DialogTitle id="form-dialog-title">Start Trend Ingestion</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Run sentiment analysis on the top 5 globally trending topics on twitter.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={() => {context.handleTrendSubmit(); this.handleClose();}} color="primary" >
                                Start
                            </Button>
                        </DialogActions>
                    </Dialog>
                    </div>
                )}
                </MContext.Consumer>
			</div>
		);
	}
}

StartIngestMenu.contextType = MContext;
export default withStyles(useStyles)(StartIngestMenu);
