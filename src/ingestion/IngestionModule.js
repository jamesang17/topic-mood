import React from 'react';
import IngestionProvider from './IngestionProvider';
import HistoricalRuns from './HistoricalRuns';
import StartIngestMenu from './StartIngestMenu';
import './IngestionModule.css';

class IngestionModule extends React.Component {
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
