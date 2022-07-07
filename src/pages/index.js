import React from "react"
import Layout  from "../components/Layout/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-400">
        % echo "hello world!"&nbsp;
        <span class="animate-pulse">&#x2588;</span>
      </h2>
    </Layout>
  )
}

export default IndexPage
