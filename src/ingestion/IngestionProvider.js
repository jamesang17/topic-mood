import React from 'react';

export const MContext = React.createContext(); // exporting context object

export default class IngestionProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			runData: [],
			topic: "",
			apiResponse: ""
		}
        this.getDagRuns = this.getDagRuns.bind(this);
        this.parseAndSetDagRuns = this.parseAndSetDagRuns.bind(this);
        this.handleTopicSubmit = this.handleTopicSubmit.bind(this);
		this.handleTrendSubmit = this.handleTrendSubmit.bind(this);
		this.triggerRun = this.triggerRun.bind(this);
	}

	handleTopicSubmit(event) {
		console.log("Clicked submit!");
		this.triggerRun(this.state.topic);
		console.log("Response: " + this.state.apiResponse);
	}

	handleTrendSubmit(event) {
		console.log("Clicked submit!");
		this.triggerRun("trends");
		console.log("Response: " + this.state.apiResponse);
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
    }

    getDagRuns() {
        fetch("http://localhost:4000/dag_runs")
			.then((response) => response.json())
            .then((response) => this.parseAndSetDagRuns(response))
            .catch((error) => error);
    }

	triggerRun(topic) {
		console.log("Topic: " + topic);
		fetch("http://localhost:4000/trigger_dag/" + topic)
			.then(response => response.text())
			.then(response => this.setState({ apiResponse: response }));
		this.getDagRuns();
	}

    componentDidMount() {
        this.getDagRuns();
    }

    render() {
		return (
			<MContext.Provider value = {
				{ state: this.state,
					setRunData: (value) => this.setState({
						runData: value
					}),
					setTopic: (value) => this.setState({
						topic: value
					}),
					handleTopicSubmit: this.handleTopicSubmit,
					handleTrendSubmit: this.handleTrendSubmit,
					getDagRuns: this.getDagRuns
				}
			}>
			{this.props.children}
			</MContext.Provider>
		)
	}

}
