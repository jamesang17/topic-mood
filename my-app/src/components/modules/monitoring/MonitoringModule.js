import React from 'react';
import logo from '../../../twitter.svg';
import TopicInputField from '../../TopicInputField'
import '../../stylesheets/modules/MonitoringModule.css'

export default function MonitoringModule() {
    return (
        <div className="Monitoring-module">
            <div className="Monitoring-component">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Tweet Analyzer
                </p>
                <TopicInputField />
            </div>
        </div>
    );
}