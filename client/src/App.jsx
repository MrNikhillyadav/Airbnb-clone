import { Route, Routes } from "react-router-dom"
import Layout from "../src/Layout"
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import AccountPage from "./pages/AccountPage";


axios.defaults.baseURL ='http://localhost:4000';
// we are getting response cookie but not sending cookie, to fix this we set defautcredential to true.
// to make it run on different ip or port [refer video: 1:26:00];
axios.defaults.withCredentials = true;


export default function App() {
  return (
    <UserContextProvider>
        <Routes>
          <Route path="/" element = {<Layout/>} >
              <Route index element = {<IndexPage/>} />
              <Route path="/login" element = {<LoginPage/>} />
              <Route path="/register" element = {<RegisterPage/>} />
              <Route path="/account" element = {<AccountPage/>} />
              <Route path="/account/:subpage?" element = {<AccountPage/>} />
              <Route path="/account/:subpage/:action" element = {<AccountPage/>} />
          </Route>
        </Routes>
    </UserContextProvider>
  )
}
  //important to make the subpage optional
