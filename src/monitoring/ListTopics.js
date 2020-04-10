import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import { MContext } from './ChartProvider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

class ListTopics extends React.Component {
    render() {
        const classes = useStyles;

        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                    <div>
                        <div className="Refresh-button">
                            <Button variant="contained" color="primary"
                                endIcon={<RefreshIcon style={{ fontSize: 25 }} />}
                                onClick={context.getTopics}>
                                Refresh Topics
                            </Button>
                        </div>
                        <List component="nav" className={classes.root} aria-label="mailbox folders">
                            {context.state.previousTopics.map((value,index) => {
                                return (
                                    <ListItem key={index} button onClick={context.handleItemClick}>
                                        <ListItemText primary={value} />
                                    </ListItem>
                                )
                            })
                            }
                        </List>
                    </div>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}

ListTopics.contextType = MContext;
export default withStyles(useStyles)(ListTopics);
