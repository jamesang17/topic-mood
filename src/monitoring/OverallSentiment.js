import React from 'react';
import { MContext } from './ChartProvider';
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import SentimentVerySatisfiedRoundedIcon from '@material-ui/icons/SentimentVerySatisfiedRounded';
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded';
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';

class OverallSentiment extends React.Component {
	constructor(props) {
		super(props);
		this.renderEmoji = this.renderEmoji.bind(this);
	}
	
	renderEmoji(sentVal) {
		console.log(sentVal);
		if (sentVal >= 0.2 && sentVal <= 0.7) {
			return (
				<div>
					<p>Positive</p>
					<SentimentSatisfiedRoundedIcon />
				</div>
				)
		} else if (sentVal <= -0.2 && sentVal >= -0.7) {
			return (
				<div>
					<p>Negative</p>
					<SentimentDissatisfiedRoundedIcon />
				</div>
				)
		} else if (sentVal < -0.7) {
			return (
				<div>
					<p>Very Negative</p>
					<SentimentVeryDissatisfiedRoundedIcon />
				</div>
				)
		} else if (sentVal > 0.7) {
			return (
				<div>
					<p>Very Positive</p>
					<SentimentVerySatisfiedRoundedIcon />
				</div>
				)
		} else if (sentVal === "") {
			return <p></p>
		} else {
			return (
				<div>
					<p>Neutral</p>
					<FaceRoundedIcon />
				</div>
				)
		}
	}

	render() {
		return (
			<div>
				<p>Latest Sentiment</p>
				<MContext.Consumer>
					{(context) => (
						<div>{this.renderEmoji(context.state.latestSen)}</div>
					)}
				</MContext.Consumer>
		    </div>		
		)
	}
}

OverallSentiment.contextType = MContext;
export default OverallSentiment;