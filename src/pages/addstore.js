import Link from 'next/link';
import Layout from '../components/Layout';
import AddStore from '../components/AddStore/AddStore';

import css from './styles/pages.scss';

export default () => (
    <Layout>
    <div className="container">
       <h1 className={css.title}> Add a store</h1>
       <p>Help everyone find what is necessary...</p>
       <div className={`columns mapview ${css.pages}`}>

           
         <AddStore />
       </div>
    
    </div>
    </Layout>
)