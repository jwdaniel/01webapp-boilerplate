import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import { Map } from 'immutable'
import { expect } from 'chai'
import Counter from '../../src/components/Counter'

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = ReactTestUtils

describe('Counter', () => {

	it('init render', () => {
		let newCounter
		const counter = 0
		const inc = () => newCounter = counter + 1
		const dec = () => newCounter = counter - 1
		const component = renderIntoDocument(
			<Counter counter={counter} inc={inc} dec={dec} />
		)
		expect(component).is.ok
	})

	it('button inc clicked', () => {
		let newCounter
		const counter = 0
		const inc = () => newCounter = counter + 1
		const dec = () => newCounter = counter - 1
		const component = renderIntoDocument(
			<Counter counter={counter} inc={inc} dec={dec} />
		)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
		Simulate.click(buttons[0])
		expect(newCounter).to.equal(1)
	})

	it('button dec clicked', () => {
		let newCounter
		const counter = 2
		const inc = () => newCounter = counter + 1
		const dec = () => newCounter = counter - 1
		const component = renderIntoDocument(
			<Counter counter={counter} inc={inc} dec={dec} />
		)
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button')
		Simulate.click(buttons[1])
		expect(newCounter).to.equal(1)
	})

})
