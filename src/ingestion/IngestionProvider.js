import React from 'react';

export const MContext = React.createContext(); // exporting context object

export default class IngestionProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			runData: []
		}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDagRuns = this.getDagRuns.bind(this);
        this.parseAndSetDagRuns = this.parseAndSetDagRuns.bind(this);
	}

    handleSubmit() {

    }

    parseAndSetDagRuns(data) {
        var runs = [];
		// we only want to get the last 50 runs
		var N = data.length-1;
        for (var i=0;i<10;i++) {
            var run = new Map();
            run.set("startDate", data[N-i]["start_date"])
            run.set("state", data[N-i]["state"])
            runs.push(run);
        }
        this.setState({ runData: runs });
		console.log(this.state.runData);
    }

    getDagRuns() {
        fetch("http://localhost:4000/dag_runs")
			.then((response) => response.json())
            .then((response) => this.parseAndSetDagRuns(response))
            .catch((error) => error);
    }

    componentDidMount() {
        this.getDagRuns();
		console.log("RunData: " + this.state.runData);
    }

    render() {
		return (
			<MContext.Provider value = {
				{ state: this.state,
					setRunData: (value) => this.setState({
						runData: value
					}),
					handleSubmit: this.handleSubmit,
				}
			}>
			{this.props.children}
			</MContext.Provider>
		)
	}

}
