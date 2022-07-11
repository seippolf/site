import React from 'react'
import Layout from '../components/Layout/Layout'
import { Helmet } from 'react-helmet'

const ProjectsPage = () => {
    return (
        <>
            <Helmet>
                <title>Projects | Justin Johnson</title>
                <meta name="description" content="Justin Johnson is a web developer in Tucson, Arizona. Here are some of Justin's projects."/>
                <link rel="canonical" href="http://justinmjoh.com/projects"/>
            </Helmet>
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
                                <a class="duration-200 hover:text-pink-600" href="https://www.gatsbyjs.com/">GatsbyJS</a> (rendering)
                            </span>
                        </li>
                        <li class="text-cyan-600">
                            <span class="text-slate-200">
                                <a class="duration-200 hover:text-pink-600" href="https://www.gatsbyjs.com/products/cloud/">Gatsby Cloud</a> (server)
                            </span>
                        </li>
                    </ul>
                </article>
            </Layout>
        </>
    )
}

export default ProjectsPage