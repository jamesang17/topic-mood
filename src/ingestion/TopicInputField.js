import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


class TopicInputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("button was clicked!")
        console.log("value: " + this.state.value)
    }

    render() {
        return (
            <div>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item>
                    <TextField variant="standard" label="Topic to analyze" 
                        className="Input-field" helperText="single topics e.g. Twitter, Python"
                        value={this.state.value}
                        onChange={(e) => this.setState({value: e.currentTarget.value})}
                        />
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large" color="primary"
                        onClick={this.handleClick}>
                        <SearchIcon fontSize="default"/>
                    </Button>
                  </Grid>
                </Grid>
            </div>
        );
    }
}

export default TopicInputField;