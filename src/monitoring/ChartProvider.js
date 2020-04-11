import React from 'react';

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

	getTopics() {
		fetch("http://localhost:4000/topics")
			.then((response) => response.json())
            .then((response) => {
				this.setState({ submitted: false });
				this.setState({ previousTopics: response });
			})
            .catch((error) => error);

	}

	componentDidMount() {
		this.getTopics();
	}

	handleChange(event) {
        this.setState({value: event.currentTarget.value});
    }

	getTopicData(topic) {
		fetch("http://localhost:4000/topics/" + topic)
			.then((response) => response.text())
			.then((response) => {
				var resMap = new Map(JSON.parse(response));
				this.setState({ data: resMap.get("data") });
				this.setState({ topic: resMap.get("topic")});
				this.setState({ latestSen: resMap.get("latestSen")});
				this.setState({ posSent: resMap.get("posSent")});
				this.setState({ negSent: resMap.get("negSent")});
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
