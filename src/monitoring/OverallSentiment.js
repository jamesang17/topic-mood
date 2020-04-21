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
		if (sentVal >= 0.05 && sentVal <= 0.2) {
			return (
				<div>
					<p>Positive</p>
					<SentimentSatisfiedRoundedIcon style={{ fontSize: 100 }} />
				</div>
				)
		} else if (sentVal <= -0.05 && sentVal >= -0.2) {
			return (
				<div>
					<p>Negative</p>
					<SentimentDissatisfiedRoundedIcon style={{ fontSize: 100 }} />
				</div>
				)
		} else if (sentVal < -0.2) {
			return (
				<div>
					<p>Very Negative</p>
					<SentimentVeryDissatisfiedRoundedIcon style={{ fontSize: 100 }} />
				</div>
				)
		} else if (sentVal > 0.2) {
			return (
				<div>
					<p>Very Positive</p>
					<SentimentVerySatisfiedRoundedIcon style={{ fontSize: 100 }} />
				</div>
				)
		} else if (sentVal === "") {
			return <p></p>
		} else {
			return (
				<div>
					<p>Neutral</p>
					<FaceRoundedIcon style={{ fontSize: 100 }} />
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
