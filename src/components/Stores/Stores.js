import Link from 'next/link';
import Rating from '../Ratings/Rating';
import Item from '../Item/Item';

import css from './Stores.scss';

export default ({total, storename, distance, location, coordinates, missings, id, rating=false, ...props} ) => {

  const { number } = total;

  return (
  <div className={css.stores}>

    <article className={css.store}>
      <h2 class={css.header2}>
        <Link as={`/stores/${id}?rating=4`}
              href={`/stores?id=${id}&rating=4`}
        >
          <a>{storename} ({location})</a> 
          
        </Link>
      </h2>
      {/* <p>
        Longitude: {coordinates.split(',')[1]} &nbsp;
        Langitude:  {coordinates.split(',')[0]}
      </p> */}

      Distance: {distance.toFixed(2)} miles,  

      <strong> { number }</strong> available
    </article>
  </div>
)};