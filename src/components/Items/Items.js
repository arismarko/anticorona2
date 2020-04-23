import css from './Items.scss';

const Items = () => {
    return (
        <div  className={css.navigation} >
            <nav>
                <ul>
                    <li>
                        <a href="/?missing=bread">Masks</a>
                    </li>
                    <li>
                        <a href="/?missing=bread">Toilet roll</a>
                    </li>
                    <li>
                        <a href="/?missing=pasta">Pasta</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Items;
