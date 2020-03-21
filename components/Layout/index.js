import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import NProgress from 'nprogress';
import Router from 'next/router';

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
          <link rel="stylesheet" href="/static/nprogress.css" />
          <link rel="stylesheet" href="/static/styles.css" />
        </Head>
        <Header />
          {children}
        <Footer />
    </div>
)