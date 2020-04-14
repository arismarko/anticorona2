import Link from 'next/link';
import Rating from '../Ratings/Rating';
import Item from '../Item/Item';

import css from './Stores.scss';

export default ({storename, location, coordinates, missings, id, rating=false, ...props}) => (
  <div className={css.stores}>
   
    <p>Find below stores that sell  {props.missing} </p>

    <section className={css.store}>
      <h2>
        <Link as={`/stores/${id}?rating=4`}
              href={`/stores?id=${id}&rating=4`}
        >
          <a>{storename} </a> 
          
        </Link>
      </h2>
      <p>
        Longitude: {coordinates.split(',')[1]} &nbsp;
        Langitude:  {coordinates.split(',')[0]}
      </p>

      Number of items: {Math.round(Math.random()*200)}
    </section>
  </div>
);