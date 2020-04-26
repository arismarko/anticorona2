
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

  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const { data, error } = useSwr(`${process.env.SERVER}/api/stores?missing=${query.missing}&date=${date}`, fetcher)

  if (error) return <div>Failed to load stores</div>
  if (!data) return <div>Loading...</div>

  const datapoints = data.map(s=> {
    return {'latitude': parseFloat(s.coordinates.split(',')[0]),  'longitude': parseFloat(s.coordinates.split(',')[1])}
  });
  return (
    <Layout>
        <div className="container">
          <section className={css.message}>
            <h1 className={css.title}> Help us reduce the distance by alerting for needed items</h1>
          </section>
        </div>
        <header>
            <Items />
        </header>
        <div className="container">
          <div className={`columns mapview ${css.pages}`}>
            <section className="column is-4 is-paddingless">
              <h2>Stores near you, that have {query.missing} today</h2>
              {data
                ? data.map(s=> <Stores key={s.id} {...s} {...s.Item} missing={query.missing} />)
                : ""
              }

              {data  ? 
                data.length === 0 ? 
                  <p>
                  <br/>
                  Apologies but we couldnt find your item:
                  <br/>
                  <ul>
                    <li>- Try to search for a different item</li>
                    <li>- <Link href="missing">Add it</Link> and we will alert you</li>
                  </ul>
                  </p>: ""
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
  return {query};
}