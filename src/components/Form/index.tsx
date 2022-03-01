import { FormHTMLAttributes, ReactNode } from "react";
import { FormContainer } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export const Form = ({ children, ...rest }: FormProps) => {
  return <FormContainer {...rest}>{children}</FormContainer>;
};
