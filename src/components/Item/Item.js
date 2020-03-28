import css from './Item.scss';

const Item = ({ item, number }) =>
  speaker ? (
    <p>
      {item}: {number}
    </p>
) : null;

export default Item;