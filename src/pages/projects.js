import React from 'react'
import Layout from '../components/Layout/Layout'

const ProjectsPage = () => {
    return (
        <Layout>
            <article class="space-y-4">
                <h2 class="text-xl font-bold underline">Projects</h2>
                <p>As I figure out how I want to implement projects on this page, let the site itself serve as one:</p>
                <ul class="list-disc pl-8">
                    <li class="text-cyan-600">
                        <span class="text-slate-200">
                            <a class="duration-200 hover:text-pink-600" href="https://tailwindcss.com/">Tailwind</a> (frontend)
                        </span>
                    </li>
                    <li class="text-cyan-600">
                        <span class="text-slate-200">
                            <a class="duration-200 hover:text-pink-600" href="https://www.digitalocean.com/products/droplets">Digital Ocean Droplet</a> (server)
                        </span>
                    </li>
                </ul>
            </article>
        </Layout>
    )
}

export default ProjectsPage