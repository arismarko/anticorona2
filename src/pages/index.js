
import { useRouter } from 'next/router'
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import Stores from '../components/Stores/Stores';
import Items from '../components/Items/Items';
import Link from 'next/link'
import fetch from 'isomorphic-unfetch';
import Spinner from '../components/Spinner/Spinner';
import dynamic from 'next/dynamic';
import sortByDistance from 'sort-by-distance';
import * as turf from '@turf/turf'
import css from './styles/pages.scss';

import useSwr from 'swr'

const fetcher = url => fetch(url).then(res => res.json());

const MapWithNoSSR = dynamic(() => import('../components/Map/Map'), {
    ssr: false
});

export default function Index({query}){
  const router = useRouter();
  const [ location, setLocation] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            setLocation([Number(position.coords.latitude),Number(position.coords.longitude)])
        });      
    } else { 
        setLocation(none, none)
    }
    
  },[]);

  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

  const { data, error } = useSwr(`${process.env.SERVER}/api/stores?missing=${query.missing}&date=${date}`, fetcher)

  if (error) return <div>Failed to load stores</div>
  if (!data) return <div>Loading...</div>

  if(location) {
    data.results.forEach(point => {
      const fromN = [Number(point.coordinates.split(',')[0]), Number(point.coordinates.split(',')[1])];
      const toN = location;

      const from = turf.point(fromN);
      const to = turf.point(toN);
      const options = {units: 'miles'};

      point.distance = turf.distance(from, to, options);

      return point;
    })
  }

  const datapoints = data.results.map(s=> {
    return {'latitude': parseFloat(s.coordinates.split(',')[0]),  'longitude': parseFloat(s.coordinates.split(',')[1])}
  });
  
  return (
    <Layout>
        <header>
            <Items />
        </header>
        <div className="container">
          <div className={`columns mapview ${css.pages}`}>
            <section className="column is-4 is-paddingless">
              {query.missing && <h2>Stores near you, that have {query.missing} today</h2>}
              {data.results && location
                ? data.results.sort(function(a, b){
                  return a.distance-b.distance
                }).map(s=> <Stores key={s.id} {...s} {...s.Item} />)
                : ""
              }

              {data && location  ? 
                data.results.length === 0 ? 
                  <p>
                  <br/>
                  Missing an Item, you can now:
                  <br/>
                  <ul>
                    <li>- Try to search for an item, for example toilet roll, or sanitizer</li>
                    <li>- <Link href="missing">Add it</Link> and we will alert you</li>
                  </ul>
                  </p>: ""
                : ""
              }

            </section>
            <aside className="column">
              <MapWithNoSSR points={datapoints}/>
            </aside>
          </div>
        </div>
    </Layout>
  )
}


Index.getInitialProps = async ({query}) => {
  return {query};
}