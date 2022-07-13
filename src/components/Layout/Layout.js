import React from "react"
import { Helmet } from "react-helmet"
import Footer from "../Footer"
import Navigation from "../Navigation"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet 
        htmlAttributes={{ 
        lang: 'en' }}
        bodyAttributes={{
          class: 'bg-slate-800'
        }}
        >
        <meta charSet="utf-8"/>z
      </Helmet>
      <div className="bg-slate-800 text-slate-200 font-mono antialiased flex flex-col min-h-screen min-w-full">
        <Navigation/>
        <main className="max-w-7xl w-full md:w-3/4 mx-auto m-8 p-8 rounded-xl bg-slate-700 border border-pink-600 shadow-lg flex-grow">
          {children}
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout