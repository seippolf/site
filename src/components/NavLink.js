import React from 'react'
import { Link } from "gatsby"

const NavLink = ({ text, to }) => {
    return (
        <Link 
            class="font-bold flex md:inline-flex w-full md:w-auto px-3 py-2 duration-200 hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700 hover:border-cyan-600 focus:border-cyan-600 active:border-cyan-600 border-transparent border rounded-xl" 
            to={ to } 
            activeClassName="font-bold flex md:inline-flex w-full md:w-auto px-3 py-2 bg-slate-700 border border-yellow-400 rounded-xl"
            >
            { text }
        </Link>
    )
}

export default NavLink