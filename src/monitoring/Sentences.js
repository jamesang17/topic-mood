import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { MContext } from './ChartProvider';
import './Sentences.css';

class Sentences extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="Sentence-container">
				<p className="Sentence-header">Sentences</p>
				<MContext.Consumer>
					{(context) => (
						<div>
							<ThumbUpIcon />
							<p className="Sentence">{context.state.posSent}</p>
							<ThumbDownIcon />
							<p className="Sentence">{context.state.negSent}</p>
						</div>
					)}
				</MContext.Consumer>
		    </div>	
		)
	}
}

Sentences.contextType = MContext;
export default Sentences;