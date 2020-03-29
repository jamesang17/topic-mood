import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    root: {
    width: '100%',
    },
    container: {
    maxHeight: 440,
    },
});

class HistoricalRuns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10
        };
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }


    handleChangePage = (event, newPage) => {
        this.setState({ page: newPage });
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({ rowsPerPage: this.state.rowsPerPage+event.target.value })
        this.setState({ page: 0 });
    };


  render() {
    const columns = [
      { id: 'run_id', label: 'Run Id', minWidth: 100 },
      { id: 'name', label: 'Name', minWidth: 100 },
      { id: 'status', label: 'Status', minWidth: 100 },
      {
        id: 'starttime',
        label: 'Start Time',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString(),
      },
      {
        id: 'endtime',
        label: 'End Time',
        minWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString(),
      },
    ];

    function createData(run_id, name, status, starttime, endtime) {
      return { run_id, name, status, starttime, endtime };
    }

    const rows = [
      createData('15','India', 'In Progress', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('14','China', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('13','Italy', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('12','United States', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('11','Canada', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('10','Australia', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('9','Germany', 'Failed', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('8','Ireland', 'Failed', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('7','Mexico', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('6','Japan', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('5','France', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('4','United Kingdom', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('3','Russia', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('2','Nigeria', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
      createData('1','Brazil', 'Success', "2020-03-28 12:40:56", "2020-03-28 13:20:06"),
    ];

    const classes = styles;

    return (
        <Paper className={classes.root} elevation={3}>
            <h6>Previous Runs</h6>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map((row) => {
                    return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.run_id}>
                            {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                    <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    );
                    })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
        </Paper>
      );
    }
}

export default withStyles(styles)(HistoricalRuns);