import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import AiRunPartner from './pages/AiRunPartner.jsx'
import DailyTodo from './pages/DailyTodo.jsx'
import AgenticContentReviewer from './pages/AgenticContentReviewer.jsx'
import ProductExpertInsights from './pages/ProductExpertInsights.jsx'
import QuizApp from './pages/QuizApp.jsx'
import Spin from './pages/Spin.jsx'
import AutoTune from './pages/AutoTune.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/ai-run-partner" element={<AiRunPartner />} />
          <Route path="/daily-to-do" element={<DailyTodo />} />
          <Route path="/agentic-content-reviewer" element={<AgenticContentReviewer />} />
          <Route path="/product-expert-insights" element={<ProductExpertInsights />} />
          <Route path="/quizapp" element={<QuizApp />} />
          <Route path="/spin" element={<Spin />} />
          <Route path="/autotune" element={<AutoTune />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
