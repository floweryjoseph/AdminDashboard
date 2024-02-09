import React from 'react'
import ProductList from './ProductList'
import UserTable from '../apis/UserTable'

import { Route, Routes } from 'react-router-dom'
import List from './UserList'

const RoutesClass = () => {
  return (
    <div className={classes.home}>
      <SideBar />
      <div className={classes.homeContainer}>
        <NavBar />
        <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          {/* <Route exact path="/home" element={<Dashboard />} /> */}
          <Route exact path="/productlist" element={<ProductList />} />
           <Route exact path="/usertable" element={<UserTable />} />
          <Route exact path="/list" element={<List />} />
          {/* <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />  */}
        </Routes>
          </div>
    </div>
  )
}

export default RoutesClass
