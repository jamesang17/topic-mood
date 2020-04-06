import React from 'react';
import ChartProvider from './ChartProvider';
import ListTopics from './ListTopics';
import MonitorTopicInput from './MonitorTopicInput'
import SentimentLineChart from './SentimentLineChart';
import OverallSentiment from './OverallSentiment';
import Sentences from './Sentences';
import './MonitoringModule.css';
import Divider from '@material-ui/core/Divider';


class MonitoringModule extends React.Component {

    render() {
        return (
            <div className="Monitoring-module">
                <ChartProvider>
                    <div className="Monitoring-component">
                        <MonitorTopicInput />
                        <div>
                            PREVIOUS TOPICS
                            <ListTopics /> 
                        </div>             
                    </div>
                    <Divider variant="middle" />
                    <div className="Monitoring-component">
                        <OverallSentiment />
                        <Sentences />
                    </div>                      
                    <Divider variant="middle" />         
                    <div className="Monitoring-component">
                        <SentimentLineChart />
                    </div>                     
                </ChartProvider>
            </div>            
        )
    }
}
export default MonitoringModule;