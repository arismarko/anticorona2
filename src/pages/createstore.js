import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
    <Layout>
        <div>
        <h1>Add a store</h1>
        <p>Help everyone else to find what they need</p>

        <form>
            <label for="storename">Store Name</label>
            <input type="text" id="storename" />

            <label for="storename">Foods</label>
            <input type="text" id="storename" />


            <label for="storename">Date</label>
            <input type="text" id="storename" />

        </form>


        </div>
    </Layout>
)