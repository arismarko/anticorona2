import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Stores from '../components/Stores/Stores';
import Items from '../components/Items/Items';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from '../lib/apollo'

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

  return (
    
    <Layout>
        <h1> Find my item</h1>
        <Items />
        <h2>Stores</h2>
        {data? data.getAllStores.map(s=> <Stores key={s.id} {...s} />): ""}
    </Layout>
  )
}

export default withApollo()(Index)