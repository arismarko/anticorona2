import css from './Items.scss';

const Items = () => {
    return (
        <div className={css.navigation} >
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <a href="?missing=bread">Bread</a>
                        </li>
                        <li>
                            <a href="?missing=toiletroll">Toilet roll</a>
                        </li>
                        <li>
                            <a href="?missing=pasta">Pasta</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Items;
