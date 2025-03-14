import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' 

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/> {/* used to change content among header and footer */}
      <Footer/>
    </>
  );
}

export default Layout
