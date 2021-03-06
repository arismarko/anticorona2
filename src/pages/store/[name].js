
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import React, { useState, useEffect } from 'react';
import Stores from '../../components/Stores/Stores';
import Items from '../../components/Items/Items';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import Spinner from '../../components/Spinner/Spinner';
import dynamic from 'next/dynamic';

import css from '../styles/pages.scss';

import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json());

const MapWithNoSSR = dynamic(() => import('../../components/Map/Map'), {
    ssr: false
});

export default function Store() {
  const router = useRouter()

  const { data, error } = useSwr(`${process.env.SERVER}/api/stores?missing=${router.query.name}`, fetcher)

  if (error) return <div>Failed to load stores</div>
  if (!data) return <div>Loading...</div>

  const datapoints = data.map(s=> {
    return {'latitude': parseFloat(s.coordinates.split(',')[0]),  'longitude': parseFloat(s.coordinates.split(',')[1])}
  });

  return (
    <Layout>
        <h1 className={css.title}> Find my item</h1>
        <header className={css.header}>
          <Items />
        </header>
        <div className={`columns mapview ${css.pages}`}>
          <section className="column is-4">
            <h2 >Stores</h2>
            {data
              ? data.map(s=> <Stores key={s.id} {...s} {...s.Item} missing={router.query.name} />)
              : ""
            }

            {data  ? 
              data.length === 0 ? `<a href="missing">We couldnt find your item, please add it so we can alert you </a>` : ""
              : ""
            }

          </section>
          <aside className="column">
            <MapWithNoSSR points={datapoints}/>
          </aside>
        </div>
    </Layout>
  )
}