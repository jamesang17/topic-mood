import React from 'react';
import axios from 'axios';

export const MContext = React.createContext(); // exporting context object

export default class ChartProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
			topic: "",
			data: []
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
        this.setState({value: event.currentTarget.value});
    }	

	handleSubmit(event) {
		console.log("Button was clicked!");
        console.log("value: " + this.state.value);

        this.setState({ data: [
				{date: "2020-03-31", sentiment: 0.018},
				{date: "2020-04-01", sentiment: 0.8258},
				{date: "2020-04-02", sentiment: 0.258},
				{date: "2020-04-03", sentiment: 0.0458}
			]});
		this.setState({topic: "nyc"});

        // const sentiment = {
        //     topic: this.state.value
        // };

        // axios.get('https://wwxa5xebjh.execute-api.us-east-1.amazonaws.com/production/sentimentresults/topics')
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
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