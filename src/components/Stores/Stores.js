import Link from 'next/link';
import Rating from '../Ratings/Rating';
import Item from '../Item/Item';

import css from './Stores.scss';

export default ({Item, storename, distance, location, coordinates, missings, id, rating=false, ...props} ) => {
  let foundItem =[]
  
  foundItem = Item.filter(item => {
    return item.item === missings 
  })

  return (
    <div className={css.stores}>

      <article className={css.store}>
        <h2 className={css.header2}>
          <Link as={`/stores/${id}?rating=4`}
                href={`/stores?id=${id}&rating=4`}
          >
            <a>{storename} ({location})</a> 
            
          </Link>
        </h2>
    
        Distance: {distance && distance.toFixed(2)} miles,  

        <strong> { foundItem.length !==0  && foundItem[0].number }</strong> available
      </article>
    </div>
)};