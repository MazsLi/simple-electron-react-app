import React, { useEffect } from 'react';
import SimpleCard from 'Components/SimpleCard';
const debug = require('debug')('component:MainPage');

function MainPage() {

	useEffect(() => {

	}, [])

	return (
		<div>
			<SimpleCard/>
		</div>
	)
}

class MainPageOld extends React.Component{

	componentWillMount = () => {
		debug('componentWillMount...');
	}

	componentWillUnmount = () => {
		
	}

	componentDidMount = () => {
		debug('componentDidMount...');
	}

	render() {
		
		debug('render...');

		return (
			<div>
				<SimpleCard/>
		 	</div>
		)
	}
}

export default MainPage;
