import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import LoginPage from "@/pages/Login"
import PlansPage from "@/pages/Plans"
import ResumePage from "@/pages/Resume"

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/plans" element={<PlansPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  )
}

export default RouterApp