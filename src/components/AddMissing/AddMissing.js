import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router'
import css from './AddMissing.scss';

import { Modal } from 'react-bulma-components';

import { Field, Formik, Form } from 'formik';


import { StoreContext } from '../../providers/stores/stores.provider';
import { addItemToStore } from '../../providers/stores/stores.utils';


import AddItem from '../AddItem/AddItem';

const AddStore = () => {
    const { storeItems, addItem } = useContext(StoreContext);
    const [ open, setOpen] = useState(false);

    const [ location, setLocation] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`${position.coords.latitude},${position.coords.longitude}`)
            });
        } else { 
            setLocation(none, none)
        }
        
    },[]);

    return (
        <div className="container">
            <section>
                <div className='columns'>
                    <div className="column is-8">
                        <Formik
                            initialValues={{ storename: '', location: '', coordinates: '' }}
                            validate={values => {
                                const errors = {};
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {

                                values.items = storeItems;
                                values.coordinates = location;
                                
                                axios.post(`${process.env.SERVER}/api/stores`, values).then(
                                    (response) => { 
                                        console.log(response) 
                                        Router.push('/')
                                    },
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
                            <div className="field">
                                <label className="label">I need the following Items <br /> (Comma seperated values-CSV)</label>
                                <div className="control">
                                    <input
                                        className="input" 
                                        type="text"
                                        name="storename"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.items}
                                        placeholder="Bread, Mask" 
                                    />
                                    {errors.email && touched.email && errors.email}

                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Area</label>
                                <div className="control">
                                    <input
                                        className="input" 
                                        type="text"
                                        name="storename"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.items}
                                        placeholder="Camden or Los Angeles " 
                                    />
                                    {errors.email && touched.email && errors.email}

                                </div>
                            </div>


                            <div className={`field is-grouped ${css.addmissings}`}>
                                <div className="control">
                                    <button className="button is-link">Submit</button>
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