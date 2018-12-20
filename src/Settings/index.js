import React from 'react'
import Search from "./Search"
import CoinGrid from "./CoinGrid"
import ConfirmButton from './ConfirmButton'
import FirstVisitMessage from './FirstVisitMessage'
import Page from '../Shared/Page'

export default function () {
	return (
		<Page name="settings">
			<FirstVisitMessage/>
			<div>
				<CoinGrid topSection/>
				<ConfirmButton/>
				<Search/>
				<CoinGrid/>
			</div>
		</Page>
	)
}
