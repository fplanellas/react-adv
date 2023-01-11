import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyCheckbox, MySelectInput, MyTextInput } from "../components";

export const FormikAbstract = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>

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
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Paco"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Planellas"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="email@google.com"
              type="email"
            />

            <MySelectInput label="Job Type" name="jobtype">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelectInput>

            <MyCheckbox label="Terms & conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
