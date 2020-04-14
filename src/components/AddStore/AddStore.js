import css from './AddStore.scss';
import { Field, Formik, Form } from 'formik';

const AddStore = () => (
    <div className="container">
        <section>
            <Formik
                initialValues={{
                    director: '',
                    movieName: '',
                    yearReleased: '',
                }}
                onSubmit={(values) => {
                    fetch('http://localhost:3000/api/stores', {
                        method: 'POST',
                        body: JSON.stringify({ ...values, yearReleased: Number(values.yearReleased) }),
                    });
                }}
            >
                <Form>
                    <label>
                        Movie Name
          <Field name="movieName" type="text"></Field>
                    </label>
                    <label>
                        Director
          <Field name="director" type="text"></Field>
                    </label>
                    <label>
                        Year Released
          <Field name="yearReleased" type="text"></Field>
                    </label>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </section>
    </div>
)

export default AddStore; 