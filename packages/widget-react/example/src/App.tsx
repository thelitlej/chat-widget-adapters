import * as React from 'react'
import {
	LiveChatWidget,
	useWidgetState,
	useWidgetIsReady,
	useWidgetChatData,
	useWidgetGreeting,
	useWidgetCustomerData,
} from '@livechat/widget-react'

function stringify(value: Parameters<typeof JSON.stringify>['0']) {
	return JSON.stringify(value, null, 2)
}

export function App() {
	const chatData = useWidgetChatData()
	const greeting = useWidgetGreeting()
	const widgetState = useWidgetState()
	const isWidgetReady = useWidgetIsReady()
	const customerData = useWidgetCustomerData()

	return (
		<main>
			<h1>Hello React!</h1>
			<pre>Widget is ready: {stringify(isWidgetReady)}</pre>
			<pre>Widget state: {stringify(widgetState)}</pre>
			<pre>Customer data: {stringify(customerData)}</pre>
			<pre>Chat data: {stringify(chatData)}</pre>
			<pre>Greeting: {stringify(greeting)}</pre>
			<LiveChatWidget
				license="12332502"
				group="0"
				visibility="maximized"
				customerName="John Doe"
				customerEmail="joh.doe@example.com"
				onNewEvent={(event) => console.log('LiveChatWidget -> onNewEvent', stringify(event))}
				onFormSubmitted={(form) => console.log('LiveChatWidget -> onFormSubmitted', stringify(form))}
				onRatingSubmitted={(rating) => console.log('LiveChatWidget -> onRatingSubmitted', stringify(rating))}
			/>
		</main>
	)
}
