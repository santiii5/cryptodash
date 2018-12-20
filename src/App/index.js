import React from 'react'
import {AppProvider} from "./AppProvider"
import AppBar from './AppBar'
import Dashboard from '../Dashboard'
import Settings from '../Settings'
import Content from './Content'
import AppLayout from './AppLayout'

export default function () {
  return (
    <AppProvider>
      <AppLayout>
        <AppBar/>
        <Content>
          <Settings/>
          <Dashboard/>
        </Content>
      </AppLayout>
    </AppProvider>
  )
}
