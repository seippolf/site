import { Link } from "gatsby"
import React from "react"

const Navigation = () => {
    return (
        <nav class="sticky top-0 z-50">
            <div class="bg-slate-900 py-2 border-b border-pink-600 shadow-lg">
                <div class="max-w-7xl md:mx-auto md:px-2 md:space-x-2">
                    <h1 class="inline-flex px-3 font-bold duration-200 underline text-2xl decoration-pink-600 hover:decoration-cyan-600">
                        <Link to="/">Justin Johnson</Link>
                    </h1>
                    <Link class="flex md:inline-flex w-full md:w-auto px-3 py-2 duration-200 hover:bg-slate-700 focus:bg-slate-700 hover:border-cyan-600 focus:border-cyan-600 border-transparent border rounded-xl" to="/about">About</Link>
                    <Link class="flex md:inline-flex w-full md:w-auto px-3 py-2 duration-200 hover:bg-slate-700 focus:bg-slate-700 hover:border-cyan-600 focus:border-cyan-600 border-transparent border rounded-xl" to="/projects">Projects</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navigation