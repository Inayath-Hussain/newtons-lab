import { Route, Routes } from "react-router-dom"
import LoginPage from "./pages/Login"
import CheckTokens from "./components/CheckTokens"
import HomePage from "./pages/Home"

function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<CheckTokens />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
