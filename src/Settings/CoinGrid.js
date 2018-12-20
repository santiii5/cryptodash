import React from 'react'
import styled, {css} from 'styled-components'
import CoinTile from './CoinTile'
import {AppContext} from "../App/AppProvider"

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  ${props =>
  props.count &&
  css`
      grid-template-columns: repeat(${props.count > 5 ? props.count : 5}, 1fr);
    `}
  grid-gap: 15px;
  margin-top: 40px;
`;

// For the top section, display the users current favorites
// Else, display either the filtered coins or the full list of coins sliced to the first 100
function getCoinsToDisplay(topSection, favorites, filteredCoins, coinList) {
  return topSection ? favorites
    : (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100)
}

export default function ({topSection}) {
  return (
    <AppContext.Consumer>
      {({favorites, filteredCoins, coinList}) =>
        <CoinGridStyled count={topSection && favorites.length}>
          {getCoinsToDisplay(topSection, favorites, filteredCoins, coinList).map(coinKey => (
            <CoinTile topSection={topSection} coinKey={coinKey}/>
          ))}
        </CoinGridStyled>
      }
    </AppContext.Consumer>
  )
}
