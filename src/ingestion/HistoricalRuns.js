import React from 'react';
import logProps from '../components/logProps';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { MContext } from './IngestionProvider';
import './HistoricalRuns.css';

const styles = makeStyles({
    table: {
        minWidth: 800
    },
});

class HistoricalRuns extends React.Component {
    render() {

        const classes = styles;

        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                    <div>
                        <div className="Refresh-button">
                            <Button variant="contained" color="primary"
                                endIcon={<RefreshIcon style={{ fontSize: 40 }} />}
                                 onClick={context.getDagRuns}>
                                 Refresh
                            </Button>
                        </div>
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
                    </div>
                    )}
                </MContext.Consumer>
            </div>
        );
    }
}

HistoricalRuns.contextType = MContext;
export default logProps(withStyles(styles)(HistoricalRuns));
