import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: cyan
  },
  overrides: {
  	MuiButton: {
  		root: {
  			color: 'pink',
  			size: 'large'
  		}
  	}
  }
});