import { Field, Formik, Form } from 'formik';
import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../providers/stores/stores.provider';

const AddItem = ({close}) => {

    const { storeItems, addItem } = useContext(StoreContext);

    return (
        <div className="columns">
            <div className="column is-12">
                <Formik
                initialValues={{ item: '', number: '' }}
                    validate={values => {
                        const errors = {};
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            addItem(values);
                            close();
                        }, 400);
                    }}
            >
            {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit}>
            <h2>Add an Item</h2>
            <div className="field">
                        <label class="label">Subject</label>
                        <div class="control">
                            <div class="select">
                            <select 
                                name="item" 
                                value={values.item}  
                                onChange={handleChange}
                            >
                                <option>Select dropdown</option>
                                <option value="disinfectants">Disinfectants</option>
                                <option value="plasticgloves">Plastic gloves</option>
                                <option value="sanitizer">Sanitizer</option>
                                <option value="mask">Masks</option>
                                <option value="toiletroll">Toilet Roll</option>
                                <option value="detol">Detol</option>
                                <option value="pasta">Pasta</option>
                            </select>
                            </div>
                        </div>
                        {errors.item && touched.item && errors.item}

                </div>

                <div className="field">
                    <label className="label">number</label>
                    <div className="control">
                        <input
                            className="input" 
                            type="text"
                            name="number"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.number}
                            placeholder="20" 
                        />
                        {errors.number && touched.number && errors.number}

                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Add Item</button>
                    </div>
                    <div className="control">
                        <button 
                            className="button is-link is-light"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
            )}
            </Formik>
            </div>
        </div>
       
    )
}

export default AddItem;