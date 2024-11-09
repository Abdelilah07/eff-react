import { Route, Routes, Link } from "react-router-dom"
import Expert1 from "./Expert1"
import Expert2 from "./Expert2"
import ExpertForm from "./ExpertForm"

function App() {

  return (
    <div>
      <nav className="bg-gray-900">
        <ul className="flex justify-center items-center p-4">
          <li className="mr-4">
            <Link className="text-white hover:text-yellow-500" to="/">Expert 1</Link>
          </li>
          <li className="mr-4">
            <Link className="text-white hover:text-yellow-500" to="/expert2">Expert 2</Link>
          </li>
          <li>
            <Link className="text-white hover:text-yellow-500" to="/expertform">Expert Form</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Expert1 />} />
        <Route path="/expert2" element={<Expert2 />} />
        <Route path="/expertform" element={<ExpertForm />} />
      </Routes>
    </div>
  )
}

export default App

