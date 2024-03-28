import { BrowserRouter, Routes, Route } from "react-router-dom"

import RandomJoke from "components/RandomJoke/RandomJoke"

import Layout from "pages/UsersApp/Layout/Layout"
import Home from "pages/UsersApp/Home/Home"
import Users from "pages/UsersApp/Users/Users"

function App() {
  return (
    <BrowserRouter>
      {/* User App
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page Not Found" />
        </Routes>
      </Layout> */}
      {/* <Homework29 /> */}
      {/* <Homework31 /> */}
      <RandomJoke />
    </BrowserRouter>
  )
}

export default App
