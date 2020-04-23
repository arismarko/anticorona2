
import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import Stores from '../components/Stores/Stores';
import Items from '../components/Items/Items';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import Spinner from '../components/Spinner/Spinner';
import dynamic from 'next/dynamic';

import css from './styles/pages.scss';

import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json());

const MapWithNoSSR = dynamic(() => import('../components/Map/Map'), {
    ssr: false
});

export default function Index({query}){

  const router = useRouter()

  const { data, error } = useSwr(`${process.env.SERVER}/api/stores?missing=${query.missing}`, fetcher)

  if (error) return <div>Failed to load stores</div>
  if (!data) return <div>Loading...</div>

  const datapoints = data.map(s=> {
    return {'latitude': parseFloat(s.coordinates.split(',')[0]),  'longitude': parseFloat(s.coordinates.split(',')[1])}
  });

  console.log(query);

  return (
    <Layout>
        <div className="container">
          <section>
            <h1 className={css.title}> Looking for an item, you are in the right place</h1>
          </section>
          
        </div>
        <header>
            <Items />
        </header>
        <div className="container">
          <div className={`columns mapview ${css.pages}`}>
            <section className="column is-4 is-paddingless">
              <h2 >Stores</h2>
              {data
                ? data.map(s=> <Stores key={s.id} {...s} {...s.Item} missing={query.missing} />)
                : ""
              }

              {data  ? 
                data.length === 0 ? `No stores that sell ${query.missing} please come back later` : ""
                : ""
              }

            </section>
            <aside className="column">
              <MapWithNoSSR points={datapoints}/>
            </aside>
          </div>
        </div>
    </Layout>
  )
}


Index.getInitialProps = async ({query}) => {
  if (!query.hasOwnProperty('missing')) {
    query.missing = 'bread';
  }

  return {query};
}