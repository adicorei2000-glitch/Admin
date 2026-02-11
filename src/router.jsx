import React from 'react'
import Admindashboard from './pages/admindashboard'
import Message from './pages/message'
import Setting from './pages/setting'
import TableComponent from './assets/components/table'
import { BrowserRouter, Route, Routes } from 'react-router'


import OrderTable from './assets/components/OrderTable'
import Homepage from './pages/homepage'
import Contact from './pages/contact'





const RouterComp = () => {
  return (
    <>
    <Routes>
        <Route path="/Admindashboard" element={<Admindashboard />} />
                <Route path="messages" element={<Message/>} />
                <Route path="settings" element={<Setting />} />
                        <Route path="table" element={<TableComponent />} />
                        <Route path="Homepage" element={<Homepage />} />
                     <Route path="table/OrderTable" element={<OrderTable />} />
                     <Route path="contact" element={<Contact />} />
                  

         
    </Routes>



    </>
  )
}

export default RouterComp