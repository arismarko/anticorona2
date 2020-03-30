import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import Stores from '../components/Stores/Stores';
import Items from '../components/Items/Items';
import Spinner from '../components/Spinner/Spinner';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';
import dynamic from 'next/dynamic';

import css from './styles/pages.scss';

const MapWithNoSSR = dynamic(() => import('../components/Map/Map'), {
  ssr: false
});

const ALL_STORES_QUERY = gql`
  query getStoresByItemName($name: String!) {
    getStoresByItemName(name:$name){
      id,
      location,
      coordinates,
      storename
    }
  }
`

export const allStoresByItemQueryVars = {
    name: 'bread'
}


const Index = function ({query})  {

  const missing = query.missing ? query.missing : "bread";

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_STORES_QUERY,{
      variables: { name: missing },
    }
  )

  const datapoints = loading !== true ? data.getStoresByItemName.map(s=> {
    return {'latitude': parseFloat(s.coordinates.split(',')[0]),  'longitude': parseFloat(s.coordinates.split(',')[1])}
  }): [];

  return (
    
    <Layout>
        <h1 className={css.title}> Find my item</h1>
        <header className={css.header}>
          <Items />
        </header>
        <div className={`columns mapview ${css.pages}`}>
          <section className="column is-4">
            <h2 >Stores</h2>
            {loading !== true
              ? data.getStoresByItemName.map(s=> <Stores key={s.id} {...s} />)
              : <Spinner />
            }
          </section>
          <aside className="column">
            <MapWithNoSSR points={datapoints}/>
          </aside>
        </div>
    </Layout>
  )
}

Index.getInitialProps = async ({query}) => {

  return {query};
};

export default withApollo()(Index)