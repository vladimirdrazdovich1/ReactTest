import React, { ChangeEvent, ComponentType, ElementType, FocusEvent } from "react";
import { useField } from "formik";

export type FieldProps = {
  name: string;
  value: string;
  error?: boolean;
  helperText?: string;
  onChange: (e: ChangeEvent<{ name?: string; value?: unknown }>) => void;
  onBlur: (e: FocusEvent<{}>) => void;
};

type WithoutInjectedProps<P> = Omit<P, "name" | "value" | "error" | "helperText" | "onChange" | "onBlur">;

interface Props<P> {
  name: string;
  component: ComponentType<P>;
}

const Field = <P extends object>({ name, component, ...props }: Props<P> & WithoutInjectedProps<P>) => {
  const [field, meta] = useField<string>(name);
  const Component: ElementType = component;
  return (
    <Component
      {...field}
      helperText={meta.touched && meta.error}
      error={meta.touched && Boolean(meta.error)}
      {...props}
    />
  );
};

export default Field;
