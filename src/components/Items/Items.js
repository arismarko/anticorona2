import css from './Items.scss';

const Items = () => {
    return (
        <div  className={css.navigation} >
            <nav>
                <ul>
                    <li>
                        <a href="/?missing=masks">Masks</a>
                    </li>
                    <li>
                        <a href="/?missing=toiletpaper">Toilet paper</a>
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