import React from 'react'
import { Link } from "gatsby"

const StyledNavLink = ({ to, children }) => {
    return (
        <Link 
            className="font-bold flex md:inline-flex w-full md:w-auto px-3 py-2 duration-200 hover:bg-slate-700 focus:bg-slate-700 active:bg-slate-700 hover:border-cyan-600 focus:border-cyan-600 active:border-cyan-600 border-transparent border rounded-xl" 
            to={ to } 
            // Uses activeStyle instead of activeClassName due to bug in gatsby
            activeStyle={{
                border: '1px solid #facc15',
                background: '#334454'
            }}
            >
            { children }
        </Link>
    )
}

export default StyledNavLink