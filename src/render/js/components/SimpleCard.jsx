import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import path from 'path';
let imgURL = require('Assets/mars.png');

const styles = {
	card: {
		maxWidth: 345
	},
	title: {
		fontSize: 14,
    },
	img: {
		width: '100%'
	},
}

function SimpleCard(props) {

	const { classes } = props;
	
	console.log(imgURL)
	
	return (
		<div>
			<Card className={classes.card}>
				<img className={classes.img} src={imgURL}/>
				<CardContent>
					<Typography className={classes.title} variant="headline" component="h2">
						Hello World
					</Typography>
					<Typography color="textSecondary">
						sub title
					</Typography>
					<Typography component="p">
						content<br/>
					</Typography>
				</CardContent>
				<CardActions>
					<Button variant="contained" color="primary">Click</Button>
				</CardActions>
			</Card>
		</div>
	)
}

SimpleCard.propTypes = {
	classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleCard);