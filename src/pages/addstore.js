import Link from 'next/link';
import Layout from '../components/Layout';
import AddStore from '../components/AddStore/AddStore';

import css from './styles/pages.scss';

import StoreProvider from '../providers/stores/stores.provider';

export default () => (
    <Layout>
      <StoreProvider>
        <div className="container">
          <section>
          <div class="columns">
            <div class="column is-4">
              <h1 className={css.title}> Add a store that has a missing item</h1>
              <p className={css.explanation}>
                
                Help everyone find what is necessary <br/><br/>

                Currently the top 3 items are:
                <ul>
                  <li>
                    - Bread
                  </li>
                  <li>
                    - Pasta
                  </li>
                  <li>
                    - Toilet Roll
                  </li>
                </ul>
                <br />
                If you have seen them on a store near by let other people know, <br/>
                this will reduce the time that need to travel <br/> and thus reduce to spread the virus
              </p>
              <div className={`columns mapview ${css.pages}`}>
                <AddStore />
              </div>
            </div>
            <div class="column is-8">
              <img src="static/shelfs.jpg" alt="help us find out missing items" />
            </div>
          </div>
          </section>
        </div>
      </StoreProvider>
    </Layout>
)