import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Routes";


function App() {
  return (
    <div  className='bg-stone-700 min-h-[100vh]'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
