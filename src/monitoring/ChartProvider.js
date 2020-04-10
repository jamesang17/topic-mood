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
		this.handleItemClick = this.handleItemClick.bind(this);
		this.getTopicData = this.getTopicData.bind(this);
		this.getTopics = this.getTopics.bind(this);
	}

	async getTopics() {
		axios.get("https://myapi.execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics")
			.then((response) => {
				var data = JSON.parse(response.data["body"]);
				let items = data["Items"];
				var topics = [];
				var seen = new Set();
				for (var i=0;i<4;i++){
					var idx = Math.floor(Math.random() * items.length);
					if (!seen.has(idx)) {
						topics.push(items[idx]["topic"]);
					} else {
						seen.add(idx);
					}
				}
				this.setState({ previousTopics: topics });
			})
	}

	componentDidMount() {
		this.getTopics();
	}

	handleChange(event) {
        this.setState({value: event.currentTarget.value});
    }

	async getTopicData(topic) {
		axios.get("https://myapi.execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics/" + topic)
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

	handleSubmit(event) {
		console.log("Button was clicked!");
        console.log("value: " + this.state.value);
		this.getTopicData(this.state.value);
	}

	handleItemClick(event) {
		const topic  = event.currentTarget.innerText;
		this.setState(
			{topic: topic},
			function() {
				console.log("Item topic: " + this.state.topic);
				this.getTopicData(this.state.topic);
			}
		);
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
					handleChange: this.handleChange,
					handleItemClick: this.handleItemClick,
					getTopics: this.getTopics
				}
			}>
			{this.props.children}
			</MContext.Provider>
		)
	}
}
