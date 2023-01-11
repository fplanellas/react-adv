import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobtype: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("campo requerido"),

          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("campo requerido"),

          email: Yup.string()
            .email("Email no tiene un formato válido")
            .required("campo requerido"),

          jobtype: Yup.string()
            .notOneOf(["it-junior"], "Esta opción no es permitida")
            .required("campo requerido"),

          terms: Yup.boolean().oneOf([true], "Debe aceptar las condiciones"),
        })}
      >
        {(formik) => (
          <Form>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" placeholder="First name" />
            <ErrorMessage name="firstName" component="span" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" placeholder="Last name" />
            <ErrorMessage name="lastName" component="span" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="text" placeholder="Email" />
            <ErrorMessage name="email" component="span" />

            <label htmlFor="jobtype">Job Type</label>
            <Field name="jobtype" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </Field>
            <ErrorMessage name="jobtype" component="span" />

            <label>
              <Field name="terms" type="checkbox" />
              Terms and conditions
            </label>

            <ErrorMessage name="terms" component="span" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
