import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { MContext } from './ChartProvider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

class ListTopics extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = useStyles;

        return (
            <div>
                <MContext.Consumer>
                    {(context) => (
                    <List component="nav" className={classes.root} aria-label="mailbox folders">
                        {context.state.previousTopics.map((value,index) => {
                            return (
                                <ListItem key={index} button>
                                    <ListItemText primary={value} />
                                </ListItem>                                
                            )
                        })
                        }
                    </List>
                    )}
                </MContext.Consumer>
            </div>
        )
    }
}

ListTopics.contextType = MContext;
export default withStyles(useStyles)(ListTopics);