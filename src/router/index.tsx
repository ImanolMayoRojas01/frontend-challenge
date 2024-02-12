/* eslint-disable @typescript-eslint/promise-function-async */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Suspense, lazy } from 'react'
import ScreenLoading from '@/components/04-templates/ScreenLoading'

const LoginPage = lazy(() => import('@/pages/Login'))
const PlansPage = lazy(() => import('@/pages/Plans'))
const ResumePage = lazy(() => import('@/pages/Resume'))

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<ScreenLoading />}>
              <LoginPage />
            </Suspense>
          }
        />
        <Route
          path="/plans"
          element={
            <Suspense fallback={<ScreenLoading />}>
              <PlansPage />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<ScreenLoading />}>
              <ResumePage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  )
}

export default RouterApp
