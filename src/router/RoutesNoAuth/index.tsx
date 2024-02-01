import { Route, Routes } from 'react-router-dom'

import LoginPage from '@/pages/Login'

const RoutesNoAuth = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
    </Routes>
  )
}

export default RoutesNoAuth