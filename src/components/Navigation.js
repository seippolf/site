import { Link } from "gatsby"
import React from "react"
import NavLink from "./NavLink"

const Navigation = () => {
    return (
        <nav class="sticky top-0 z-50">
            <div class="bg-slate-900 py-2 border-b border-pink-600 shadow-lg">
                <div class="max-w-7xl md:mx-auto md:w-3/4 md:space-x-2 space-y-2 md:space-y-0">
                    <h1 class="font-roadrage inline-flex px-3 text-2xl">
                        <Link 
                            class="text-pink-600 hover:text-cyan-600 duration-200"
                            to="/"
                            activeClassName="text-yellow-400"
                            >
                            Justin Johnson
                        </Link>
                    </h1>
                    <NavLink text="About" to="/about/"/>
                    <NavLink text="Projects" to="/projects/"/>
                </div>
            </div>
        </nav>
    )
}

export default Navigation