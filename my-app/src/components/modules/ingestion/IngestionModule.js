import React from 'react';
import HistoricalRuns from './HistoricalRuns'
import StartIngestMenu from './StartIngestMenu'
import '../../stylesheets/modules/IngestionModule.css'

class IngestionModule extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        /* Uses DOM node  */ 
    }

    wrapper = React.createRef();

    render() {
        return (
            <div className="Ingestion-module">
                <div className="Ingestion-component">
                    <StartIngestMenu />
                </div>
                <div className="Ingestion-component">
                    <HistoricalRuns ref={this.wrapper} />
                </div>
            </div>
        );
    }
}

export default IngestionModule;