import React from 'react';

export const MContext = React.createContext(); // exporting context object

export default class IngestionProvider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			runData: [],
			submitted: false,
			open: false,
			topic: "",
			apiResponse: ""
		}
        this.getDagRuns = this.getDagRuns.bind(this);
        this.parseAndSetDagRuns = this.parseAndSetDagRuns.bind(this);
		this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
		this.triggerRun = this.triggerRun.bind(this);
	}

	handleClickOpen(event) {
		console.log("Opening!");
		this.setState({ open: true });
	}

	handleClose(event) {
		console.log("Closing!");
		this.setState({ open: false });
	}

	handleSubmit(event) {
		console.log("Clicked submit!");
		console.log("Topic: " + this.state.topic);
		this.setState({ submitted: true });
		this.triggerRun();
		console.log("Response: " + this.state.apiResponse);
		this.setState({ open: false });
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
		this.setState({ submitted: false });
    }

	triggerRun() {
		fetch("http://localhost:4000/trigger_dag/" + this.state.topic)
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
					setSubmitted: (value) => this.setState({
						submitted: value
					}),
					setTopic: (value) => this.setState({
						topic: value
					}),
					handleClickOpen: this.handleClickOpen,
					handleClose: this.handleClose,
					handleSubmit: this.handleSubmit,
					getDagRuns: this.getDagRuns
				}
			}>
			{this.props.children}
			</MContext.Provider>
		)
	}

}
