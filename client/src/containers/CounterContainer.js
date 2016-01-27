import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter'

const CounterContainer = connect(
	state => ({
		counter: state.counter.get('counter') ? state.counter.get('counter') : 0
	}),
	// dispatch => bindActionCreators(CounterActions, dispatch)
	CounterActions
)(Counter)

export default CounterContainer
