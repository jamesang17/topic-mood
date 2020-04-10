import React from 'react';
import logProps from '../components/logProps';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { MContext } from './IngestionProvider';

const styles = makeStyles({
    table: {
        minWidth: 800
    },
});

class HistoricalRuns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiResponse: "",
        };
    }

    render() {

        const classes = styles;

        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="Ingestion Runs"
                                stickyHeader={true} size="medium">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Start Date</TableCell>
                                        <TableCell>State</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {context.state.runData.map((run,index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">
                                                {run.get("startDate")}
                                            </TableCell>
                                            <TableCell>{run.get("state")}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}
                </MContext.Consumer>
            </div>
        );
    }
}

HistoricalRuns.contextType = MContext;
export default logProps(withStyles(styles)(HistoricalRuns));
