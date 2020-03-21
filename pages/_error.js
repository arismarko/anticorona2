import { Component } from 'react';
import Layout from '../components/Layout';

export default class Error extends Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? 
        err.statusCode : null;
        return { statusCode, err: err ? err.message: ''};
    }


    render() {
        return (
            <Layout>
                <p>
                        {this.props.err}
                        {this.props.statusCode ?
                        `An error ${this.props.statusCode} occured on server`
                        : `An error occured on the client`}
                </p>
            </Layout>
        )
    }
}