import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Stores from '../components/Stores/Stores';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from '../lib/apollo'

const ALL_STORES_QUERY = gql`
  query {
    getAllStores{
      location
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

  console.log(data);

  return (
    
    <Layout>
        <h1> Welcome to my workshop</h1>
        <ul>
            <li>
                <a href="/about">About</a>
                {}
            </li>
        </ul>
    </Layout>
  )
}

export default withApollo()(Index)