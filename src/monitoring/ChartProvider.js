import React from 'react';
import MonitoringSnack from './MonitoringSnack';

const axios = require('axios');
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
		this.snackRef = React.createRef();
	}

	handleOpenSnack() {
		this.snackRef.current.handleOpen();
	}

	getTopics() {
		var res = this.getAnalyzedTopics();
		res.then((response) => {
			var data = JSON.parse(response.data["body"]);
			let items = data["Items"];
			var topics = [];
			var seen = new Set();
			var i = 0
			while (i < 4) {
				var idx = Math.floor(Math.random() * items.length);
				if (!seen.has(idx)) {
					topics.push(items[idx]["topic"]);
					seen.add(idx);
					i++;
				}
			}
			this.setState({ submitted: false });
			this.setState({ previousTopics: topics });
		});
	}

	componentDidMount() {
		this.getTopics();
	}

	handleChange(event) {
        this.setState({value: event.currentTarget.value});
    }

	getTopicData(topic) {
		var res = this.getSentimentResults(topic);
		res.then((response) => {
			if (response === null) {
				this.handleOpenSnack();
			} else {
				this.setState({ data: response.get("data") });
				this.setState({ topic: response.get("topic")});
				this.setState({ latestSen: response.get("latestSen")});
				this.setState({ posSent: response.get("posSent")});
				this.setState({ negSent: response.get("negSent")});
			}
		})
	}

	handleSubmit(event) {
		if (this.state.value === "") {
			this.handleOpenSnack();
		} else {
			this.getTopicData(this.state.value);
		}
	}

	handleItemClick(event) {
		const topic  = event.currentTarget.innerText;
		this.setState(
			{topic: topic},
			function() {
				this.getTopicData(this.state.topic);
			}
		);
	}

	async getAnalyzedTopics() {
		try {
        return await axios.get("https://" + process.env.REACT_APP_API_NAME + ".execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics")
    } catch(error) {
        console.log(error);
    }
	}

	async getTopicSentiment(topic) {
	    try {
	        return await axios.get("https://" + process.env.REACT_APP_API_NAME + ".execute-api.us-east-1.amazonaws.com/dev/sentimentresults/topics/" + encodeURIComponent(topic));
	    } catch(error) {
	        console.log(error);
	    }
	}

	getSentimentResults(topic) {
		const topics = this.getTopicSentiment(topic);
		return topics.then((response) => {
				var resData = new Map();
				var data = JSON.parse(response.data["body"]);
			var sentimentData = [];
			let items = data["Items"];
			if (items.length === 0) {
				return null;
			} else {
				for(var i=0;i<items.length;i++){
					var timestamp = items[i]["timestamp"].split("T")[0];
					var sentiment = items[i]["sentiment"];
							 sentimentData.push({ timestamp,sentiment });
				}
					resData.set("data", sentimentData)
					resData.set("topic", items[0]["topic"])
					resData.set("latestSen", items[items.length-1]["sentiment"])
					resData.set("posSent", items[items.length-1]["maxPosText"])
					resData.set("negSent", items[items.length-1]["maxNegText"])
					return resData;
			}
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
					handleChange: this.handleChange,
					handleItemClick: this.handleItemClick,
					getTopics: this.getTopics
				}
			}>
			{this.props.children}
			<MonitoringSnack ref= {this.snackRef} />
			</MContext.Provider>
		)
	}
}
