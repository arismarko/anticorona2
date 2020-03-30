import css from './AddStore.scss';

const AddStore = () => (
    <div className="container">
        <section>
        <div className="columns">
        <div className="column is-6">
        <div className="field">
            <label className="label">Storename</label>
            <div className="control">
                <input className="input" type="text" placeholder="Text input" />
            </div>
        </div>

        <div className="field">
            <label className="label">Location</label>
            <div className="control">
                <input className="input is-success" type="text" placeholder="Text input" value="Camden" />
                <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
                </span>
            </div>
        </div>

        <div className="field">
            <label className="label">Item</label>
            <div className="control">
                <div className="select">
                <select>
                    <option>ToiletRoll</option>
                    <option>Pasta</option>
                    <option>Bread</option>
                </select>
                </div>
            </div>
        </div>


        <div className="field">
            <label className="label">Share your coordinates</label>
            <div className="control">
             <input className="input is-success" type="text" placeholder="Text input" value="bulma" />
            </div>
        </div>


        <div className="field">
            <label className="label">How much is the quantity?</label>
            <div class="control">
                <label className="radio">
                <input type="radio" name="10" />
                1 -10
                </label>
                <br/>
                <label className="radio">
                <input type="radio" name="20" />
                20-100
                </label>
                <br/>
                <label className="radio">
                <input type="radio" name="20" />
                100+
                </label>
            </div>
        </div>


        <div className="field is-grouped">
        <div className="control">
            <button className="button is-link">Submit</button>
        </div>
        </div>
        </div>
        </div>
        </section>
    </div>
)

export default AddStore; 