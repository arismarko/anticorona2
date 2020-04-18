import React, { useContext } from 'react';
import axios from 'axios';

import css from './AddStore.scss';

import { Field, Formik, Form } from 'formik';


import { StoreContext } from '../../providers/stores/stores.provider';
import { addItemToStore } from '../../providers/stores/stores.utils';


const AddStore = () => {
    const { storeItems, addItem } = useContext(StoreContext);

    console.log(storeItems);

    return (
        <div className="container">
            <section>
                <div className='columns'>
                    <div className="column is-4">
                        <Formik
                            initialValues={{ storename: '', location: '', coordinates: '' }}
                            validate={values => {
                                const errors = {};
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {

                                values.items = storeItems;

                                console.log(values);
                                
                                axios.post('http://localhost:3000/api/addstores', values).then(
                                    (response) => { console.log(response)},
                                    (error) => {
                                        console.log(error);
                                    }
                                )

                                setSubmitting(false);
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
                            <div class="field">
                                <label class="label">Storename</label>
                                <div class="control">
                                    <input
                                        class="input" 
                                        type="text"
                                        name="storename"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Tesco or Sainsbury's" 
                                    />
                                    {errors.email && touched.email && errors.email}

                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Location</label>
                                <div class="control">
                                    <input
                                        class="input" 
                                        type="text"
                                        name="location"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Camden" 
                                    />
                                    {errors.email && touched.email && errors.email}

                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Coordinates</label>
                                <div class="control">
                                    <input
                                        class="input" 
                                        type="text"
                                        name="coordinates"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="10213123, -23123123" 
                                    />
                                    {errors.email && touched.email && errors.email}

                                </div>
                            </div>

                         

                            <div class="field is-grouped">
                                <div class="control">
                                    <button class="button is-link">Submit</button>
                                </div>
                                <div class="control">
                                    <button class="button is-link is-light">Cancel</button>
                                </div>
                            </div>
                        </form>
                    )}
                    </Formik>

                    


                    <Formik
                            initialValues={{ item: '', number: '' }}
                            validate={values => {
                                const errors = {};
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                addItem(values);
                                console.log(storeItems);

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
                    <div class="field">
                                <label class="label">Items</label>
                                <div class="control">
                                    <input
                                        class="input" 
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

                            <div class="field">
                                <label class="label">number</label>
                                <div class="control">
                                    <input
                                        class="input" 
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

                            <div class="field is-grouped">
                                <div class="control">
                                    <button class="button is-link">Add Item</button>
                                </div>
                                <div class="control">
                                    <button class="button is-link is-light">Cancel</button>
                                </div>
                            </div>
                        </form>
                        )}
                        </Formik>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default AddStore; 