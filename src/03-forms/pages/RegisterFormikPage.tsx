import React from "react";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .min(2, "Debe tener mas de 2 caracteres")
            .required("campo requerido"),

          email: Yup.string()
            .email("Email no tiene un formato válido")
            .required("campo requerido"),

          password1: Yup.string()
            .min(6, "Debe tener 6 caracteres o mas")
            .required("campo requerido"),

          password2: Yup.string()
            .oneOf([Yup.ref("password1"), null], "Passwords deben ser iguales")
            .min(6, "Debe tener 6 caracteres o mas")
            .required("campo requerido"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Paco" />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="email@google.com"
              type="email"
            />

            <MyTextInput
              label="Password"
              name="password1"
              placeholder="Paco@google.com"
              type="password"
            />

            <MyTextInput
              label="Repetir password"
              name="password2"
              placeholder="Paco@google.com"
              type="password"
            />

            <button type="submit">Submit</button>
            <button type="button" onClick={formik.handleReset}>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
