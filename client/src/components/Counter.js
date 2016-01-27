import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {

	static propTypes = {
		inc: PropTypes.func.isRequired,
		dec: PropTypes.func.isRequired,
		save: PropTypes.func,
		counter: PropTypes.number.isRequired
	};

	render() {
		const { inc, dec, save, counter } = this.props

		// console.log(counter)
		return (
			<div>
				<div> Counter: {counter} </div>
				<div>
					<button onClick={inc}> + </button>
					<button onClick={dec}> - </button>
					<button onClick={() => save(counter)}> Save </button>
				</div>
			</div>
		)
	}

}

