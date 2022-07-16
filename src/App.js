import React from 'react'
import './App.css'
import HomePage from './views/HomePage'
import ResultsPage from './views/ResultsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Amplify } from 'aws-amplify'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports'
Amplify.configure(awsExports)

const App = ({ signOut }) => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage signOut={signOut} />} />
          <Route path="/results" element={<ResultsPage signOut={signOut} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default withAuthenticator(App)
