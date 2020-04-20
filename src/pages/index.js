import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import Stores from '../components/Stores/Stores';
import Items from '../components/Items/Items';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import Spinner from '../components/Spinner/Spinner';
import dynamic from 'next/dynamic';


import css from './styles/pages.scss';

const MapWithNoSSR = dynamic(() => import('../components/Map/Map'), {
  ssr: false
});

const Index = function ({stores, missing='bread'})  {

  // console.log(data);

  const datapoints = loading !== true ? stores.map(s=> {
    return {'latitude': parseFloat(s.coordinates.split(' ')[0]),  'longitude': parseFloat(s.coordinates.split(',')[1])}
  }): [];

  const loading = true;

  return (
    
    <Layout>
        <h1 className={css.title}> Find my item</h1>
        <header className={css.header}>
          <Items />
        </header>
        <div className={`columns mapview ${css.pages}`}>
          <section className="column is-4">
            <h2 >Stores</h2>
            {loading === true
              ? stores.map(s=> <Stores key={s.id} {...s} {...s.Item} missing={missing} />)
              : ""
            }

            {loading !== true ? 
              stores.length === 0 ? `No stores that sell ${missing} please come back later` : ""
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

Index.getInitialProps = async ({req={query: {missing:''}}}) => {

  const {missing} = req.query;

  const tes = await fetch(`${process.env.SERVER}/api/stores?missing=${missing ? missing: 'bread'}`);
  const data = await tes.json();

  return {stores: data, missing: missing};
}

export default Index;