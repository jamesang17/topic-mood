import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { MContext } from './ChartProvider';

class Sentences extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<p>Sentences</p>
				<MContext.Consumer>
					{(context) => (
						<div>
							<ThumbUpIcon />
							<p>{context.state.posSent}</p>
							<ThumbDownIcon />
							<p>{context.state.negSent}</p>
						</div>
					)}
				</MContext.Consumer>
		    </div>	
		)
	}
}

Sentences.contextType = MContext;
export default Sentences;