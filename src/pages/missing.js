import Link from 'next/link';
import Layout from '../components/Layout';
import AddMissing from '../components/AddMissing/AddMissing';

import css from './styles/pages.scss';

import StoreProvider from '../providers/stores/stores.provider';

export default () => (
    <Layout>
      <StoreProvider>
        <div className="container">
          <h1 className={css.title}> Add an item that you need urgently</h1>
          <p>You need an item please let us know in the form below</p>
          <div className={`columns mapview ${css.pages}`}>
            <AddMissing />
          </div>
        
        </div>
      </StoreProvider>
    </Layout>
)