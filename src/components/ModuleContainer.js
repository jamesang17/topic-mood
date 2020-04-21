import React from 'react';
import IngestionModule from '../ingestion/IngestionModule';
import MonitoringModule from '../monitoring/MonitoringModule';
import MenuAppBar from './MenuAppBar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './Navigation.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ModuleContainer() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
       <div className={classes.root}>
          <MenuAppBar />
          <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
              <Tab label="MONITORING" {...a11yProps(0)} />
              <Tab label="INGESTION" {...a11yProps(1)} disabled />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0} className="Tab-panel">
            <MonitoringModule />
          </TabPanel>
          <TabPanel value={value} index={1} className="Tab-panel" disabled>
            <IngestionModule />
          </TabPanel>
        </div>
    );
}
