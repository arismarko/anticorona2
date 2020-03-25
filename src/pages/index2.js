import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Index = ({data}) => (
    <Layout>
        <h1> Welcome to my workshop</h1>
        <ul>
            <li>
                <a href="/about">About</a>
                {data.name}
            </li>
        </ul>
    </Layout>
)

Index.getInitialProps = async () => {
    const res = await fetch('https://api.myjson.com/bins/12jyvw')
    const data = await res.json();


    return {data};
}

export default Index;