import React from 'react';
import logo from '../../../twitter.svg';
import TopicInputField from '../../TopicInputField'
import HistoricalRuns from './HistoricalRuns'
import '../../stylesheets/modules/IngestionModule.css'

class IngestionModule extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        const node = this.myRef.current;
        /* Uses DOM node  */ 
    }

    render() {
        return (
            <div className="Ingestion-module">
                <div className="Ingestion-component">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Tweet Analyzer
                    </p>
                    <TopicInputField />
                </div>
                <div className="Ingestion-component" ref={this.myRef}>
                    <HistoricalRuns />
                </div>
            </div>
        );
    }
}

export default IngestionModule;