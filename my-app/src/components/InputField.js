import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    render() {
        return (
            <div>
                <Grid container spacing={2} alignItems="flex-end">
                  <Grid item>
                    <TextField variant="outlined" label="Topic to analyze" className="Input-field"/>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" size="large" color="primary">
                        <SearchIcon/>
                    </Button>
                  </Grid>
                </Grid>
            </div>
        );
    }
}

export default InputField;