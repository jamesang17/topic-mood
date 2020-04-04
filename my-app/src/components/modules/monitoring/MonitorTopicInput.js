import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { MContext } from './ChartProvider';

class MonitorTopicInput extends React.Component {
	constructor(props) {
		super(props);

		// this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
	}

	// handleChange(event) {
 //        this.setState({topic: event.currentTarget.value})
 //    }

    sendData = () => {
    	this.props.parentCallback("Hey!")
    }

    render() {
    	return (
			<div>
				<MContext.Consumer>
					{(context) => (
						<Grid container spacing={2} alignItems="flex-end">
	                    <Grid item>
	                        <TextField variant="standard" label="Search Analyzed Topics" 
	                            helperText="single topics e.g. Twitter, Python"
	                            value={this.context.topic}
	                            onChange={this.context.handleChange}
	                        />
	                    </Grid>
	                    <Grid item>
	                        <Button variant="contained" size="large" color="primary"
	                            onClick={this.context.handleSubmit}>
	                            <SearchIcon fontSize="default"/>
	                        </Button>
	                    </Grid>
	                </Grid>
					)}
	                </MContext.Consumer>
            </div>    		
    	)
    }
}

MonitorTopicInput.contextType = MContext;
export default MonitorTopicInput;