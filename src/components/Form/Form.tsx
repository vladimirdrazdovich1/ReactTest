import React, { HTMLAttributes } from "react";
import { Form as FormikForm, Formik, FormikValues, FormikHelpers } from "formik";

interface Props extends Omit<HTMLAttributes<HTMLFormElement>, "onSubmit"> {
  initialValues: FormikValues;
  onSubmit: (values: any, formikHelpers: FormikHelpers<any>) => void | Promise<any>;
  validationSchema: any;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

const Form = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
  validateOnChange = false,
  validateOnBlur = false,
  ...props
}: Props) => (
  <Formik
    initialValues={initialValues}
    validateOnChange={validateOnChange}
    validateOnBlur={validateOnBlur}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    enableReinitialize
  >
    {() => <FormikForm {...props}>{children}</FormikForm>}
  </Formik>
);

export default Form;
