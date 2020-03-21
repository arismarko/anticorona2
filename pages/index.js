import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Stores from '../components/Stores/Stores';

class Index extends Component {
    static async getInitialProps() {
        const res = await fetch('http://localhost:3001/stores')
        const stores = await res.json();

        return {stores};
    }

    render() {
        const {stores} = this.props;
        return (
            <Layout>
                <h1>Stores</h1>
                {stores.map(s=> <Stores key={s.id} {...s} />)}
                
            </Layout>
        )
            
        }
}

export default Index;