import React from 'react';
import logo from '../../../twitter.svg';
import TopicInputField from '../../TopicInputField'
import HistoricalRuns from './HistoricalRuns'
import '../../stylesheets/modules/IngestionModule.css'

export default function IngestionModule() {
    return (
        <div className="Ingestion-module">
            <div className="Ingestion-component">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Tweet Analyzer
                </p>
                <TopicInputField />
            </div>
            <div className="Ingestion-component">
                <HistoricalRuns />
            </div>
        </div>
    );
}