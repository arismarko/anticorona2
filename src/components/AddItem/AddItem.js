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
                    <label className="label">Items</label>
                    <div className="control">
                        <input
                            className="input" 
                            type="text"
                            name="item"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="bread" 
                        />
                        {errors.email && touched.email && errors.email}

                    </div>
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
                            value={values.email}
                            placeholder="20" 
                        />
                        {errors.email && touched.email && errors.email}

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