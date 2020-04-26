import { Field, Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import css from './SearchBox.scss';

const SearchBox = () => {
    const router = useRouter();
    return (
        <div className={`columns ${css.searchbox}`}>
            <div className="column is-4 is-paddingless">
                <Formik
                initialValues={{ search: ''}}
                    validate={values => {
                        const errors = {};
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            router.push(`/?missing=${values.search}`)
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
                    <div className="control">
                        <input
                            className="input" 
                            type="text"
                            name="search"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Type and item and press enter" 
                        />
                        {errors.email && touched.email && errors.email}

                    </div>
                </div>
            </form>
            )}
            </Formik>
            </div>
        </div>
    )
}

export default SearchBox;