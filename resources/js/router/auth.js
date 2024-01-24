import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

function Auth() {
  return (
    <div>
        <Header/>
        <div>
            <Outlet />
        </div>
        <Footer/>
    </div>
  )
}

export default Auth