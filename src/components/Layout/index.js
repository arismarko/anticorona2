import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NProgress from 'nprogress';
import Router from 'next/router';

import css from './Layout.scss';

Router.onRouteChangeStart = url => {
  console.log(`loading: ${url}`);
  NProgress.start();
}

Router.onRouteChangeStart = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title='Anticorona' }) => (
        <div>
          <Head>
            <title>{title}</title>
            <meta name="viewport" conent="width=device-width" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css" />
            <link rel="stylesheet" href="/static/nprogress.css" />
            <link re="stylesheet" href="/static/maps.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
          </Head>
          <Header />
            <main className={css.mainbody}>
              {children}
            </main>
          <Footer />
        </div>
)