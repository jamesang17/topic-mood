import React from 'react';
import ChartProvider from './ChartProvider';
import ListTopics from './ListTopics';
import MonitorTopicInput from './MonitorTopicInput'
import SentimentLineChart from './SentimentLineChart';
import '../../stylesheets/modules/MonitoringModule.css';


class MonitoringModule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: ""
        }

        this.callbackFunction = this.callbackFunction.bind(this);
    }


    callbackFunction = (childData) => {
        this.setState({message: childData})
    }

    render() {
        return (
            <div className="Monitoring-module">
                <ChartProvider>
                    <div className="Monitoring-component">
                        <MonitorTopicInput parentCallback ={this.callbackFunction} />
                    </div>
                    <div className="Monitoring-component">
                        <SentimentLineChart />
                    </div>
                </ChartProvider>
                <div className="Monitoring-component">
                    PREVIOUS TOPICS
                    <ListTopics parentCallback ={this.callbackFunction} />
                </div>
            </div>            
        )
    }
}
export default MonitoringModule;