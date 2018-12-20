import React from 'react'
import styled from 'styled-components'
import PriceGrid from './PriceGrid'
import CoinSpotlight from './CoinSpotlight'
import Chart from './Chart'
import Page from '../Shared/Page'

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-gap: 15px;
  grid-template-columns: 1fr 3fr;
`

export default function () {
  return (
    <Page name="dashboard">
      <PriceGrid/>
      <ChartGrid>
        <CoinSpotlight/>
        <Chart/>
      </ChartGrid>
    </Page>
  )
}
