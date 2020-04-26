import { Field, Formik, Form } from 'formik';
import { useRouter } from 'next/router';

import css from './Searchbox.scss';

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
                            const term = values.search.toLowerCase().replace(' ', '');

                            router.push(`/?missing=${term}`)
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
                            value={values.search}
                            placeholder="Type an item missing and press enter" 
                        />

                        {errors.search && touched.search && errors.search}

                    </div>
              

                </div>
            </form>
            )}
            </Formik>
           
            </div>
            <section>
                <h1 className={css.title}> Find essentials, Alert others, and save distance looking</h1>
            </section>
        </div>
    )
}

export default SearchBox;