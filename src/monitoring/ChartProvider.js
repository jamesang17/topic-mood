import React from 'react';
import axios from 'axios';

export const MContext = React.createContext(); // exporting context object

export default class ChartProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
			topic: "",
			data: [],
			latestSen: "",
			posSent: "",
			negSent: "",
			previousTopics: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async componentDidMount() {
		axios.get("https://myapi.execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics")
			.then((response) => {
				var data = JSON.parse(response.data["body"]);
				let items = data["Items"];
				var topics = [];
				for (var i=0;i<4;i++){
					topics.push(items[i]["topic"]);
				}
				this.setState({ previousTopics: topics });
			})
	}

	handleChange(event) {
        this.setState({value: event.currentTarget.value});
    }	

	handleSubmit(event) {
		console.log("Button was clicked!");
        console.log("value: " + this.state.value);
		axios.get("https://myapi.execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics/" + this.state.value)
			.then((response) => {
				var data = JSON.parse(response.data["body"]);
				var sentimentData = []
				let items = data["Items"];
				for(var i=0;i<items.length;i++){
					var timestamp = items[i]["timestamp"];
					var sentiment = items[i]["sentiment"];
					sentimentData.push({ timestamp,sentiment });
				}
				this.setState({ data: sentimentData });
				this.setState({ topic: items[0]["topic"]});
				this.setState({ latestSen: items[items.length-1]["sentiment"]});
				this.setState({ posSent: items[items.length-1]["maxPosText"]});
				this.setState({ negSent: items[items.length-1]["maxNegText"]});
			});
	}

	render() {
		return (
			<MContext.Provider value = {
				{ state: this.state, 
					setTopic: (value) => this.setState({
						topic: value
					}),
					setData: (value) => this.setState({
						data: value
					}),
					handleSubmit: this.handleSubmit,
					handleChange: this.handleChange
				}
			}>
			{this.props.children} 
			</MContext.Provider>
		)
	}
}