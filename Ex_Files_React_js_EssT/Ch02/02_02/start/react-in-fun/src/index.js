import React, { Component } from 'react';
import { render } from 'react-dom';

let tennisData = {
	total: 60,
	hp: 2,
	ucd: 10,
	goal: 300
}

const TennisDayCounter = ({total, hp, ucd, goal}) => {
	return (
		<section>
			<div>
				<p> Total days: {total} </p>
			</div>
			<div>
				<p> Herbert Park: {hp} </p>
			</div>
			<div>
				<p> UCD: {ucd} </p>
			</div>
			<div>
				<p> Goals Progress: {calcGoalProgress(total, goal)} </p>
			</div>
		</section>
	)
}

const calcGoalProgress = (total, goal) => {
		return getPercent(total/goal);
}

const	getPercent = decimal => {
		return decimal * 100 + '%';
}

render(
	<TennisDayCounter 
		total={tennisData.total}
		hp={tennisData.hp}
		ucd={tennisData.ucd}
		goal={tennisData.goal}
	/>,
	document.getElementById('root')
	)

