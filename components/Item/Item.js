import css from './Item.scss';

const Item = ({ speaker, twitter }) =>
  speaker ? (
    <p className={css.Speaker}>
      {speaker} / <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
    </p>
) : null;

export default Item;