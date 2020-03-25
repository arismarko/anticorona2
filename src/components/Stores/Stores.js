import Link from 'next/link';
import Rating from '../Ratings/Rating';
import Item from '../Item/Item';

export default ({ storeName, location, perioxi, id, rating=false, ...props}) => (
  <div className="Store">
    <h2>
      <Link as={`/stores/${id}?rating=4`}
            href={`/stores?id=${id}&rating=4`}
      >
        <a>{storeName} </a> 
      </Link>

      @ {perioxi}
    </h2>
    <p>
      Longitude: {location[1]} 
      Langitude:  {location[0]}
    </p>


    <h3>Foods</h3>
    xx
    xx
    xx

    {/* {process.env.SHOW_SPEAKER && <Item {...props} />} */}
    {rating && <Rating value={rating} />}
  </div>
);