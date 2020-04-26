import css from './Items.scss';

import Search from '../SearcBox/SearchBox';

const Items = () => {
    return (
        <div className={css.navigation}>
            <div className={`container is-paddingless`}>
                <Search />
            </div>
        </div>
    )
}

export default Items;
