import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Stores from '../components/Stores/Stores';
import Items from '../components/Items/Items';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { withApollo } from '../lib/apollo';

import dynamic from 'next/dynamic';

import css from './styles/pages.scss';

const MapWithNoSSR = dynamic(() => import('../components/Map/Map'), {
  ssr: false
});


const ALL_STORES_QUERY = gql`
  query {
    getAllStores{
      id,
      location,
      coordinates,
      storename
    }
  }
`

export const allStoresQueryVars = {
    name: 'tesco1'
}


const Index = function (props)  {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_STORES_QUERY
  )

  const datapoints =  [  {"latitude": 51.514248 ,"longitude":-0.093145},
  {"latitude": 52.466667 ,"longitude":-1.916667}];

  return (
    
    <Layout>
        <h1 className={css.title}> Find my item</h1>
        <header className={css.header}>
          <Items />
        </header>
        <div className={`columns mapview ${css.pages}`}>
          <section className="column is-4">
            <h2 >Stores</h2>
            {data? data.getAllStores.map(s=> <Stores key={s.id} {...s} />): ""}
          </section>
          <aside className="column">
            <MapWithNoSSR points={datapoints}/>
          </aside>
        </div>
    </Layout>
  )
}

export default withApollo()(Index)