import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ModalForm.module.css";
import toast, { Toaster } from "react-hot-toast";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
});

export default function ModalForm() {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values);

    resetForm();
    toast.success("Successfully send!");

    setSubmitting(false);
  };

  return (
    <div className={styles.modalForm}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <Field
                type="text"
                name="name"
                placeholder="Name"
                className={styles.input}
              />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <Field
                type="date"
                name="bookingDate"
                placeholder="Booking date"
                className={styles.input}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={styles.error}
              />
            </div>
            <div className={styles.formGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={styles.inputCom}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={styles.error}
              />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
