import React from 'react'
import {SelectableTile, DisabledTile, DeletableTile} from "../Shared/Tile"
import CoinImage from '../Shared/CoinImage'
import {Tile} from "../Shared/Tile"
import CoinHeaderGrid from './CoinHeaderGrid'
import {AppContext} from "../App/AppProvider"

function clickCoinHandler(topSection, coinKey, addCoin, removeCoin) {
	return topSection ? () => {
		removeCoin(coinKey)
	} : () => {
		addCoin(coinKey)
	}
}

export default function ({topSection, coinKey}) {
	return (
		<AppContext.Consumer>
			{({isInFavorites, coinList, addCoin, removeCoin}) => {

				const coin = coinList[coinKey] || <Tile> Coin Not Found </Tile>
				const disabled = !topSection && isInFavorites(coinKey)
				const TileClass = topSection ? DeletableTile : disabled ? DisabledTile : SelectableTile

				return (
					<TileClass
						onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
					>
						<CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} topSection={topSection}/>
						<CoinImage coin={coin}/>
					</TileClass>
				)
			}}
		</AppContext.Consumer>
	)
}
