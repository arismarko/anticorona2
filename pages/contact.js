import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
    <Layout>
        <div>
        <h1>Contact us!</h1>
        <p>there are a lot of ways of contact me </p>

        <ul>
                <Link href="/contact"> 
                    <a>Get in touch</a>
                </Link>
        </ul>
        </div>
    </Layout>
)