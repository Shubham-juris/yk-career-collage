import React from 'react'
import Navbar from './common/Navbar'
import RoutesPage from './routes/RoutesPage'
import Footer from './common/Footer'
import NotificationBell from './components/notifiaction/NotificationBell'


const App = () => {
  return (
   <>
   <Navbar/>
   <RoutesPage/>
   <NotificationBell />
  <Footer/>
   </>
  )
}

export default App
