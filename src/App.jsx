import { Route, Routes } from "react-router-dom"
import Layout from "../src/Layout"
import IndexPage from "./pages/IndexPage";
import Login from "./pages/Login";



export default function App() {
  return (
    <Routes>
      <Route path="/" element = {<Layout/>} >
          <Route index element = {<IndexPage/>} />
          <Route path="/login" element = {<Login/>} />
      </Route>

    </Routes>

    
  )
}
