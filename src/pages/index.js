import React from "react"
import Layout  from "../components/Layout/Layout"

export function Head() {
    return (
        <>
            <title>Home | Justin Johnson</title>
            <meta name="description" content="Justin Johnson is a web developer in Tucson, Arizona."/>
            <link rel="canonical" href="http://justinmjoh.com/"/>
        </>
    )
}

export default function IndexPage() {
    return (
        <Layout>
              <article>
                <h2 class="px-2 text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400">
                    % echo "hello world!"&nbsp;
                    <span class="animate-pulse">&#x2588;</span>
                </h2>
                <div class="w-full mt-8 mb-8 mx-auto border border-b-0 border-pink-600"></div>
                <p class="px-4 text-lg font-bold">I'm Justin Johnson, a full stack web developer with specialty in Laravel, React, and NetSuite platforms.</p>
              </article>
        </Layout>
    )
}