import css from './Items.scss';

const Items = () => {
    return (
        <div  className={css.navigation} >
            <nav>
                <ul>
                    <li>
                        <a href="bread">Masks</a>
                    </li>
                    <li>
                        <a href="toiletroll">Toilet roll</a>
                    </li>
                    <li>
                        <a href="pasta">Pasta</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Items;