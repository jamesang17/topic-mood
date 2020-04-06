import React from 'react';
import TopicInputField from './TopicInputField';
import Fab from '@material-ui/core/Fab';
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

	render() {

		return (
			<div>
				<TopicInputField />
				<br/>
				<Fab variant="extended">
        			Start Ingestion
      			</Fab>
			</div>
		);
	}
}

export default withStyles(useStyles)(StartIngestMenu);