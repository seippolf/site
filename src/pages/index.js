import React from "react"
import Layout  from "../components/Layout/Layout"
import { Helmet } from 'react-helmet'

const IndexPage = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Home | Justin Johnson</title>
          <meta name="description" content="Justin Johnson is a web developer in Tucson, Arizona."/>
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Layout>
        <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400">
          % echo "hello world!"&nbsp;
          <span class="animate-pulse">&#x2588;</span>
        </h2>
      </Layout>
    </>
  )
}

export default IndexPage
