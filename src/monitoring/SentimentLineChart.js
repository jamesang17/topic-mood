import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { MContext } from './ChartProvider';
import './SentimentLineChart.css';

class SentimentLineChart extends React.Component {
	render() {
		return (
			<div>
				<MContext.Consumer>
				{(context) => (
					<div>
						<p>Topic: {context.state.topic}</p>
						<div className="Chart-container">
							<ResponsiveContainer width="80%" height={400}>
								<LineChart
							        data={context.state.data}
							        margin={{
							          top: 5, right: 20, left: 20, bottom: 5,
							        }}
							    >
							        <CartesianGrid strokeDasharray="3 3" />
							        <XAxis dataKey="timestamp"/>
							        <YAxis />
							        <Tooltip />
							        <Legend />
							        <Line type="monotone" dataKey="sentiment" stroke="#8884d8" activeDot={{ r: 8 }} />
							     </LineChart>
						     </ResponsiveContainer>
						</div>
				     </div>
			     )}
				</MContext.Consumer>
		    </div>
		)
	}
}

SentimentLineChart.contextType = MContext;
export default SentimentLineChart;
