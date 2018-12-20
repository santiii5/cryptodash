import React from 'react'
import styled from 'styled-components'
import {backgroundColor2, fontSize2} from '../Shared/Styles'
import {AppContext} from "../App/AppProvider"
import _ from 'lodash'
import fuzzy from 'fuzzy'

const SearchContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 20px;
`

const SearchInput = styled.input`
  ${backgroundColor2}
  color: #1163c9;
  border: 1px solid;
  ${fontSize2}
  margin: 5px;
  height: 25px;
  place-self: center left;
`

const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
	// Get all the coin symbols
	let coinSymbols = Object.keys(coinList)
	// Get all the coin names, maps symbol to name
	let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
	let allStringsToSearch = coinSymbols.concat(coinNames)
	let fuzzyResults = fuzzy
		.filter(inputValue, allStringsToSearch, {})
		.map(result => result.string)

	let filteredCoins = _.pickBy(coinList, (result, symKey) => {
		let coinName = result.CoinName
		// If our fuzzy results contains this symbol OR the coinName, include it (return true).
		return (
			_.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
		)
	})

	setFilteredCoins(filteredCoins)
}, 500)

function filterCoins(e, setFilteredCoins, coinList) {
	let inputValue = _.get(e, "target.value")
	if (!inputValue) {
		setFilteredCoins(null)
		return
	}
	handleFilter(inputValue, coinList, setFilteredCoins)
}

export default function () {
	return (
		<AppContext.Consumer>
			{({setFilteredCoins, coinList}) =>
				<SearchContainer>
					<h2> Search all coins </h2>
					<SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}/>
				</SearchContainer>
			}
		</AppContext.Consumer>
	)
}
