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
	render() {
		return (
			<div>
                <MContext.Consumer>
                {(context) => (
                    <div>
				    <Fab variant="extended" onClick={context.handleClickOpen}>
                        Start Ingestion
                    </Fab>
                    <Dialog onClose={context.handleClose}
                        aria-labelledby="form-dialog-title"
                        open={context.state.open}>
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
                                onChange={(e) => context.setTopic(e.currentTarget.value)} />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={context.handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={context.handleSubmit} color="primary" >
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
