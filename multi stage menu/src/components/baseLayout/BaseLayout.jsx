import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function BaseLayout({children}) {
  return (
    <div>
    <Navbar />
    {children}
    <Footer />
    </div>
  )
}
