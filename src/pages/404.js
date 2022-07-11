import React from 'react';
import Layout from '../components/Layout/Layout';
import { Link } from 'gatsby';

const NotFoundPage = () => {
    return(
        <Layout>
            <article class="text-center">
                <h2 class="text-5xl underline">404</h2>
                <p class="p-2">You seem sorta lost.</p>
                <p class="p-2">But we all do too, sometimes.</p>
                <p class="p-2">Let me take you <Link to="/" class="underline hover:text-cyan-400 focus:text-cyan-400 active:text-cyan-400">home</Link>.</p>
            </article>
        </Layout>
    )
}

export default NotFoundPage