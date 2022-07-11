import { Link } from "gatsby"
import React from "react"
import NavLink from "./NavLink"

const Navigation = () => {
    return (
        <nav class="sticky top-0 z-50">
            <div class="bg-slate-900 py-2 border-b border-pink-600 shadow-lg">
                <div class="max-w-7xl md:mx-auto md:space-x-2 space-y-2">
                    <h1 class="inline-flex px-3 font-bold underline text-2xl">
                        <Link 
                            class="decoration-pink-600 hover:decoration-cyan-600"
                            to="/"
                            activeClassName="decoration-yellow-400"
                            >
                                Justin Johnson
                        </Link>
                    </h1>
                    <NavLink text="About" to="/about"/>
                    <NavLink text="Projects" to="/projects"/>
                </div>
            </div>
        </nav>
    )
}

export default Navigation