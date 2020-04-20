import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Stores from '../components/Stores/Stores';

const StoresPage = ({store, rating}) => (
    <Layout>
        <Stores 
            {...store}
            rating={rating}
        />
    </Layout>
)

StoresPage.getInitialProps = async ({query}) => {

    

    const res = await fetch(`${process.env.SERVER}/stores/${query.id}`);
    const store = await res.json();

    // console.log(store);

    return {store, rating: query.rating};
}

export default StoresPage;