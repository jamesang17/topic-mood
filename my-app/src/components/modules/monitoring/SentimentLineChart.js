import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { MContext } from './ChartProvider';

class SentimentLineChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// data: [
			// 	{date: "2020-03-31", sentiment: 0.018},
			// 	{date: "2020-04-01", sentiment: 0.8258},
			// 	{date: "2020-04-02", sentiment: 0.258},
			// 	{date: "2020-04-03", sentiment: 0.0458}
			// ],
			// topic: "nyc"
		};
	}

	componentDidMount() {
	

	}

	componentDidUpdate(prevProps) {

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div>
				<MContext.Consumer>
				{(context) => (
					<div>
						<p>{context.state.topic}</p>
						<LineChart
					        width={500}
					        height={300}
					        data={context.state.data}
					        margin={{
					          top: 5, right: 30, left: 20, bottom: 5,
					        }}
					    >
					        <CartesianGrid strokeDasharray="3 3" />
					        <XAxis dataKey="name"/>
					        <YAxis />
					        <Tooltip />
					        <Legend />
					        <Line type="monotone" dataKey="sentiment" stroke="#8884d8" activeDot={{ r: 8 }} />
					     </LineChart>
				     </div>
			     )}
				</MContext.Consumer>
		    </div>
		)
	}
}

export default SentimentLineChart;