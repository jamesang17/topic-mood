import React from 'react';
import IngestionProvider from './IngestionProvider';
import HistoricalRuns from './HistoricalRuns';
import StartIngestMenu from './StartIngestMenu';
import './IngestionModule.css';

class IngestionModule extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidMount() {
        /* Uses DOM node  */
    }

    render() {
        return (
            <div className="Ingestion-module">
                <IngestionProvider>
                    <div className="Ingestion-component">
                        <StartIngestMenu />
                    </div>
                    <div className="Historical-Runs">
                        <HistoricalRuns />
                    </div>
                </IngestionProvider>
            </div>
        );
    }
}

export default IngestionModule;
