import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePages from './pages/HomePages'
import CreatePages from './pages/CreatePages'
import NavBar from './components/NavBar'
import MainLayouts from "./components/layouts/MainLayouts";

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayouts/>}>
        <Route index element={<HomePages/>}/>
        <Route path="/create" element={<CreatePages/>}/>

      </Route>
    )
  )

  return (
    <div className="">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App
