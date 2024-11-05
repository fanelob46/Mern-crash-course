import { Route, Routes } from "react-router-dom"
import HomePages from '../pages/HomePages'
import CreatePages from '../pages/CreatePages'


function App() {
 

  return (
    <div className="min-h-[100vh]">
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route pages='/create' element={<CreatePages/>}/>
      </Routes>
    </div>
  );
}

export default App
